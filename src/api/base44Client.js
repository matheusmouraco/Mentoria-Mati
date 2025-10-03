import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68919b789fb38ec28b75aacb", 
  requiresAuth: true // Ensure authentication is required for all operations
});
