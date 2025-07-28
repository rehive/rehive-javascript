/**
 * Integration test for error handling functionality.
 * 
 * This test validates that our API clients properly handle errors using
 * the withErrorHandling wrapper and ApiError class from api-utils.ts.
 * 
 * Run with: node tests/integration/error-handling.test.js
 */

const { RehiveClient, ApiError } = require('../../dist/index.js');

async function testErrorHandling() {
  console.log('🧪 Testing Error Handling\n');
  
  const results = {
    authenticationError: false,
    badRequestError: false,
    networkError: false,
    apiErrorInstanceof: false,
    statusCodeCapture: false,
    errorDetailCapture: false
  };
  
  try {
    const rehive = new RehiveClient({ 
      baseUrl: 'https://api.rehive.com'
    });
    
    // Test 1: Authentication error (401)
    console.log('1️⃣  Testing authentication error (401)...');
    try {
      // This should fail because we're not authenticated
      await rehive.user.authRetrieve();
      console.log('   ❌ Expected authentication error but call succeeded');
    } catch (error) {
      console.log('   ✅ Caught authentication error');
      console.log('   📊 Error type:', error.constructor.name);
      console.log('   📊 Status:', error.status);
      console.log('   📊 Message:', error.message);
      
      if (error instanceof ApiError) {
        results.apiErrorInstanceof = true;
        console.log('   ✅ Error is instance of ApiError');
      }
      
      if (error.status === 401) {
        results.authenticationError = true;
        results.statusCodeCapture = true;
        console.log('   ✅ Correct status code captured');
      }
      
      if (error.error) {
        results.errorDetailCapture = true;
        console.log('   ✅ Error details captured:', typeof error.error);
      }
    }
    
    // Test 2: Bad request error (400)
    console.log('\n2️⃣  Testing bad request error (400)...');
    try {
      // This should fail with a 400 error due to missing required fields
      await rehive.auth.login({
        company: 'demo',
        user: '', // Empty user should cause 400
        password: 'demo1234'
      });
      console.log('   ❌ Expected bad request error but call succeeded');
    } catch (error) {
      console.log('   ✅ Caught bad request error');
      console.log('   📊 Error type:', error.constructor.name);
      console.log('   📊 Status:', error.status);
      console.log('   📊 Message:', error.message);
      
      if (error.status === 400) {
        results.badRequestError = true;
        console.log('   ✅ Correct 400 status captured');
      }
      
      if (error.error && typeof error.error === 'object') {
        console.log('   ✅ Structured error details:', Object.keys(error.error));
      }
    }
    
    // Test 3: Network/connection error
    console.log('\n3️⃣  Testing network error...');
    try {
      const badClient = new RehiveClient({ 
        baseUrl: 'https://nonexistent-domain-that-should-fail.com'
      });
      
      await badClient.auth.login({
        company: 'demo',
        user: 'test@test.com',
        password: 'password'
      });
      console.log('   ❌ Expected network error but call succeeded');
    } catch (error) {
      console.log('   ✅ Caught network error');
      console.log('   📊 Error type:', error.constructor.name);
      console.log('   📊 Message:', error.message);
      
      // Network errors might not be ApiError instances (they could be fetch errors)
      if (error.code === 'ENOTFOUND' || error.message.includes('fetch')) {
        results.networkError = true;
        console.log('   ✅ Network error properly handled');
      }
    }
    
    // Summary
    console.log('\n📋 Test Results Summary:');
    console.log('   🔐 Authentication Error (401):', results.authenticationError ? '✅' : '❌');
    console.log('   📝 Bad Request Error (400):', results.badRequestError ? '✅' : '❌');
    console.log('   🌐 Network Error:', results.networkError ? '✅' : '❌');
    console.log('   🏷️  ApiError instanceof:', results.apiErrorInstanceof ? '✅' : '❌');
    console.log('   📊 Status Code Capture:', results.statusCodeCapture ? '✅' : '❌');
    console.log('   📋 Error Detail Capture:', results.errorDetailCapture ? '✅' : '❌');
    
    const allPassed = Object.values(results).every(result => result === true);
    
    if (allPassed) {
      console.log('\n🎉 SUCCESS: All error handling tests passed!');
      console.log('   ✅ withErrorHandling wrapper is working correctly');
      console.log('   ✅ ApiError instances are properly created');
      console.log('   ✅ Status codes and error details are captured');
      console.log('   ✅ Different error types are handled appropriately');
    } else {
      console.log('\n⚠️  Some error handling tests failed - check implementation');
    }
    
    return {
      success: allPassed,
      results
    };
    
  } catch (error) {
    console.log('\n❌ UNEXPECTED ERROR IN TEST');
    console.error('   Error:', error.message);
    return {
      success: false,
      error: error.message
    };
  }
}

// Export for programmatic usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { testErrorHandling };
}

// Run if called directly
if (require.main === module) {
  testErrorHandling().then(result => {
    process.exit(result.success ? 0 : 1);
  });
}