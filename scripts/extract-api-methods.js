#!/usr/bin/env node

/**
 * Rehive SDK API Methods Extractor
 * 
 * This script fetches all swagger specifications from the Rehive platform
 * and extensions, then extracts and summarizes all available API methods.
 * 
 * Usage: node scripts/extract-api-methods.js
 * 
 * This script is useful for:
 * - Getting an overview of all available API methods
 * - Understanding the scope of the Rehive platform
 * - Planning SDK integrations
 * - Documenting API capabilities
 * 
 * Output: Creates separate markdown files in docs/api-methods/ directory
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Swagger endpoints mapped to actual client names
const endpoints = [
  { 
    name: 'Platform User API', 
    url: 'https://api.rehive.com/schema.json',
    clientName: 'platform-user-api',
    fileName: 'platform-user-methods.md'
  },
  { 
    name: 'Platform Admin API', 
    url: 'https://api.rehive.com/admin/schema.json',
    clientName: 'platform-admin-api', 
    fileName: 'platform-admin-methods.md'
  },
  { 
    name: 'Conversion Extension', 
    url: 'https://conversion.services.rehive.com/schema.json',
    clientName: 'conversion-api',
    fileName: 'conversion-methods.md'
  },
  { 
    name: 'Mass Send Extension', 
    url: 'https://mass-send.services.rehive.com/schema.json',
    clientName: 'mass-send-api',
    fileName: 'mass-send-methods.md'
  },
  { 
    name: 'Notifications Extension', 
    url: 'https://notification.services.rehive.com/schema.json',
    clientName: 'notifications-api',
    fileName: 'notifications-methods.md'
  },
  { 
    name: 'Products Extension', 
    url: 'https://product.services.rehive.com/schema.json',
    clientName: 'products-api',
    fileName: 'products-methods.md'
  },
  { 
    name: 'Rewards Extension', 
    url: 'https://reward.services.rehive.com/schema.json',
    clientName: 'rewards-api',
    fileName: 'rewards-methods.md'
  },
  { 
    name: 'Stellar Mainnet Extension', 
    url: 'https://stellar.services.rehive.com/swagger/?format=openapi',
    clientName: 'stellar-api',
    fileName: 'stellar-methods.md'
  },
  { 
    name: 'Stellar Testnet Extension', 
    url: 'https://stellar-testnet.services.rehive.com/swagger/?format=openapi',
    clientName: 'stellar-testnet-api',
    fileName: 'stellar-testnet-methods.md'
  },
  { 
    name: 'Business Extension', 
    url: 'https://business.services.rehive.com/schema.json',
    clientName: 'business-api',
    fileName: 'business-methods.md'
  },
  { 
    name: 'Payment Requests Extension', 
    url: 'https://payment-requests.services.rehive.com/schema.json',
    clientName: 'payment-requests-api',
    fileName: 'payment-requests-methods.md'
  },
  { 
    name: 'Bridge Extension', 
    url: 'https://bridge.services.rehive.com/schema.json',
    clientName: 'bridge-api',
    fileName: 'bridge-methods.md'
  },
  { 
    name: 'App Extension', 
    url: 'https://app.services.rehive.com/schema.json',
    clientName: 'app-api',
    fileName: 'app-methods.md'
  }
];

function fetchSwagger(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https:') ? https : http;
    
    client.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const swagger = JSON.parse(data);
          resolve(swagger);
        } catch (error) {
          reject(new Error(`Failed to parse JSON from ${url}: ${error.message}`));
        }
      });
    }).on('error', (error) => {
      reject(new Error(`Failed to fetch ${url}: ${error.message}`));
    });
  });
}

function extractMethods(swagger, apiName) {
  const methods = [];
  
  if (!swagger.paths) {
    console.warn(`No paths found in ${apiName}`);
    return methods;
  }
  
  for (const [path, pathObj] of Object.entries(swagger.paths)) {
    for (const [method, methodObj] of Object.entries(pathObj)) {
      if (['get', 'post', 'put', 'patch', 'delete', 'head', 'options'].includes(method.toLowerCase())) {
        methods.push({
          path,
          method: method.toUpperCase(),
          operationId: methodObj.operationId,
          summary: methodObj.summary,
          description: methodObj.description
        });
      }
    }
  }
  
  return methods;
}

function generateMarkdownContent(endpoint, methods) {
  let content = `# ${endpoint.name} Methods\n\n`;
  content += `**Client:** \`${endpoint.clientName}\`\n`;
  content += `**Total Methods:** ${methods.length}\n\n`;
  
  if (methods.length === 0) {
    content += 'No methods found.\n';
    return content;
  }
  
  // Group by HTTP method
  const methodGroups = {};
  methods.forEach(method => {
    if (!methodGroups[method.method]) {
      methodGroups[method.method] = [];
    }
    methodGroups[method.method].push(method);
  });
  
  for (const [httpMethod, methodList] of Object.entries(methodGroups)) {
    content += `## ${httpMethod} Methods (${methodList.length})\n\n`;
    methodList.forEach(method => {
      content += `### \`${method.path}\`\n\n`;
      if (method.operationId) {
        content += `- **Operation ID:** \`${method.operationId}\`\n`;
      }
      if (method.summary) {
        content += `- **Summary:** ${method.summary}\n`;
      }
      if (method.description && method.description !== method.summary) {
        content += `- **Description:** ${method.description}\n`;
      }
      content += '\n';
    });
  }
  
  return content;
}

async function main() {
  // Create output directory
  const outputDir = path.join(process.cwd(), 'docs', 'api-methods');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log('🚀 Extracting API methods for each client...\n');
  
  const summaryContent = ['# Rehive SDK API Methods Overview\n'];
  
  for (const endpoint of endpoints) {
    console.log(`📡 Processing ${endpoint.name}...`);
    
    try {
      const swagger = await fetchSwagger(endpoint.url);
      const methods = extractMethods(swagger, endpoint.name);
      
      // Generate individual file
      const markdownContent = generateMarkdownContent(endpoint, methods);
      const filePath = path.join(outputDir, endpoint.fileName);
      fs.writeFileSync(filePath, markdownContent);
      
      // Add to summary
      summaryContent.push(`## ${endpoint.name}`);
      summaryContent.push(`- **Client:** \`${endpoint.clientName}\``);
      summaryContent.push(`- **Methods:** ${methods.length}`);
      summaryContent.push(`- **Documentation:** [${endpoint.fileName}](./api-methods/${endpoint.fileName})\n`);
      
      console.log(`✅ Created ${endpoint.fileName} (${methods.length} methods)`);
      
    } catch (error) {
      console.error(`❌ Failed to process ${endpoint.name}: ${error.message}`);
      summaryContent.push(`## ${endpoint.name}`);
      summaryContent.push(`- **Client:** \`${endpoint.clientName}\``);
      summaryContent.push(`- **Status:** ❌ Failed to fetch\n`);
    }
  }
  
  // Write summary file
  const summaryPath = path.join(process.cwd(), 'docs', 'api-methods-overview.md');
  fs.writeFileSync(summaryPath, summaryContent.join('\n'));
  
  console.log(`\n🎉 Done! Created ${endpoints.length} method documentation files in docs/api-methods/`);
  console.log(`📋 Summary available at docs/api-methods-overview.md`);
}

main().catch(console.error);