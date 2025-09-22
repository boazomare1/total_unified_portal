// Frappe API wrapper for centralized client portal
// This module provides a clean interface for interacting with Frappe/ERPNext APIs

const FRAPPE_BASE_URL = process.env.REACT_APP_FRAPPE_URL || 'http://localhost:8000';

class FrappeAPI {
  constructor() {
    this.baseURL = FRAPPE_BASE_URL;
    this.apiKey = process.env.REACT_APP_FRAPPE_API_KEY;
    this.apiSecret = process.env.REACT_APP_FRAPPE_API_SECRET;
  }

  // Get authentication headers
  getAuthHeaders() {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    if (this.apiKey && this.apiSecret) {
      headers['Authorization'] = `token ${this.apiKey}:${this.apiSecret}`;
    }

    return headers;
  }

  // Generic API call method
  async apiCall(endpoint, options = {}) {
    const url = `${this.baseURL}/api/method/${endpoint}`;
    const config = {
      method: 'GET',
      headers: this.getAuthHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.exc) {
        throw new Error(data.exc);
      }

      return data;
    } catch (error) {
      console.error('Frappe API Error:', error);
      throw error;
    }
  }

  // Authentication methods
  async login(username, password) {
    return this.apiCall('login', {
      method: 'POST',
      body: JSON.stringify({
        usr: username,
        pwd: password,
      }),
    });
  }

  async logout() {
    return this.apiCall('logout');
  }

  // User methods
  async getCurrentUser() {
    return this.apiCall('frappe.auth.get_logged_user');
  }

  async getUserInfo() {
    return this.apiCall('frappe.client.get_user_info');
  }

  // Document methods
  async getDoc(doctype, name) {
    return this.apiCall(`frappe.client.get`, {
      method: 'POST',
      body: JSON.stringify({
        doctype,
        name,
      }),
    });
  }

  async createDoc(doctype, data) {
    return this.apiCall(`frappe.client.insert`, {
      method: 'POST',
      body: JSON.stringify({
        doc: {
          doctype,
          ...data,
        },
      }),
    });
  }

  async updateDoc(doctype, name, data) {
    return this.apiCall(`frappe.client.set_value`, {
      method: 'POST',
      body: JSON.stringify({
        doctype,
        name,
        fieldname: Object.keys(data)[0],
        value: Object.values(data)[0],
      }),
    });
  }

  async deleteDoc(doctype, name) {
    return this.apiCall(`frappe.client.delete`, {
      method: 'POST',
      body: JSON.stringify({
        doctype,
        name,
      }),
    });
  }

  // List methods
  async getList(doctype, filters = {}, fields = ['*'], limit = 20, offset = 0) {
    return this.apiCall(`frappe.client.get_list`, {
      method: 'POST',
      body: JSON.stringify({
        doctype,
        filters,
        fields,
        limit_start: offset,
        limit_page_length: limit,
      }),
    });
  }

  // Search methods
  async search(doctype, query, filters = {}) {
    return this.apiCall(`frappe.client.search`, {
      method: 'POST',
      body: JSON.stringify({
        doctype,
        query,
        filters,
      }),
    });
  }

  // File methods
  async uploadFile(file, folder = 'Home') {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', folder);

    const response = await fetch(`${this.baseURL}/api/method/upload_file`, {
      method: 'POST',
      headers: {
        'Authorization': `token ${this.apiKey}:${this.apiSecret}`,
      },
      body: formData,
    });

    return response.json();
  }

  // Custom method call
  async callMethod(method, args = {}) {
    return this.apiCall(method, {
      method: 'POST',
      body: JSON.stringify(args),
    });
  }
}

// Create and export a singleton instance
const frappeAPI = new FrappeAPI();
export default frappeAPI;

// Export the class for custom instances if needed
export { FrappeAPI };