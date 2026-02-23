/**
 * Integration test for authentication flow.
 *
 * This test validates that login and authenticated API calls work correctly
 * with the demo environment.
 *
 * Run with: node tests/integration/auth-flow.test.js
 */

const { createAuth, createUserApi } = require('../../dist/index.js');

async function testAuthFlow() {
  console.log('🧪 Testing Authentication Flow\n');

  try {
    // Create auth and user API instances
    const auth = createAuth({
      baseUrl: 'https://api.rehive.com'
    });
    const user = createUserApi({ auth });

    console.log('1️⃣  Testing login...');

    // Test login with demo credentials
    const loginResult = await auth.login({
      company: 'demo',
      user: 'i@rehive.com',
      password: 'demo1234'
    });

    console.log('   ✅ Login successful');
    console.log('   📊 Response keys:', Object.keys(loginResult));
    console.log('   🔑 Has token:', !!loginResult.token);

    if (!loginResult.token) {
      throw new Error('Login response missing token');
    }

    console.log('\n2️⃣  Testing authenticated endpoint...');

    // Test an authenticated endpoint
    const userResult = await user.authRetrieve();

    console.log('   ✅ Auth retrieve successful');
    console.log('   📊 Response type:', typeof userResult);
    console.log('   📊 Top-level keys:', Object.keys(userResult));

    // Verify response structure
    console.log('\n🔍 Validating response...');

    if (!userResult || typeof userResult !== 'object') {
      throw new Error(`Expected object response, got ${typeof userResult}`);
    }

    if (!('data' in userResult)) {
      throw new Error('Response missing data property');
    }

    if (!userResult.data || typeof userResult.data !== 'object') {
      throw new Error('Response.data is not an object');
    }

    console.log('   📊 User data keys:', Object.keys(userResult.data));
    console.log('   📧 User email:', userResult.data.email);
    console.log('   🆔 User ID:', userResult.data.id);

    // Verify essential user properties are present
    if (!userResult.data.email) {
      throw new Error('Missing user email in response');
    }

    if (!userResult.data.id) {
      throw new Error('Missing user ID in response');
    }

    // Test logout
    console.log('\n3️⃣  Testing logout...');
    await auth.logout();
    console.log('   ✅ Logout successful');

    console.log('\n🎉 SUCCESS: Authentication flow working correctly!');
    console.log('   ✅ Login/logout cycle completed');
    console.log('   ✅ Authenticated API calls successful');
    console.log('   ✅ Response structure validated');

    return {
      success: true,
      loginResponse: loginResult,
      userResponse: userResult
    };

  } catch (error) {
    console.log('\n❌ TEST FAILED');
    console.error('   Error:', error.message);

    if (error.status) {
      console.error('   Status:', error.status);
    }

    if (error.error) {
      console.error('   Details:', JSON.stringify(error.error, null, 2));
    }

    return {
      success: false,
      error: error.message
    };
  }
}

// Export for programmatic usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { testAuthFlow };
}

// Run if called directly
if (require.main === module) {
  testAuthFlow().then(result => {
    process.exit(result.success ? 0 : 1);
  });
}
