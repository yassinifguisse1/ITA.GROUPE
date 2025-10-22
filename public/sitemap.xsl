<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html>
      <head>
        <title>XML Sitemap - iTA Groupe</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            min-height: 100vh;
          }
          
          .header {
            background: linear-gradient(135deg, #10B981 0%, #059669 100%);
            color: white;
            padding: 30px;
            border-radius: 12px;
            margin-bottom: 30px;
            text-align: center;
            box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
          }
          
          .header h1 {
            margin: 0;
            font-size: 2.5rem;
            font-weight: 700;
          }
          
          .header p {
            margin: 10px 0 0 0;
            font-size: 1.1rem;
            opacity: 0.9;
          }
          
          .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
          }
          
          .stat-card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-left: 4px solid #10B981;
          }
          
          .stat-number {
            font-size: 2rem;
            font-weight: bold;
            color: #10B981;
            margin-bottom: 5px;
          }
          
          .stat-label {
            color: #666;
            font-size: 0.9rem;
          }
          
          .sitemap-container {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          
          .sitemap-header {
            background: #f8fafc;
            padding: 20px;
            border-bottom: 1px solid #e2e8f0;
          }
          
          .sitemap-header h2 {
            margin: 0;
            color: #1e293b;
            font-size: 1.5rem;
          }
          
          .url-list {
            margin: 0;
            padding: 0;
          }
          
          .url-item {
            display: flex;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid #e2e8f0;
            transition: background-color 0.2s;
          }
          
          .url-item:hover {
            background-color: #f8fafc;
          }
          
          .url-item:last-child {
            border-bottom: none;
          }
          
          .url-info {
            flex: 1;
          }
          
          .url-link {
            color: #10B981;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            margin-bottom: 5px;
            display: block;
          }
          
          .url-link:hover {
            text-decoration: underline;
          }
          
          .url-meta {
            display: flex;
            gap: 20px;
            font-size: 0.9rem;
            color: #64748b;
            margin-top: 8px;
          }
          
          .meta-item {
            display: flex;
            align-items: center;
            gap: 5px;
          }
          
          .priority {
            background: #10B981;
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-weight: 600;
            font-size: 0.8rem;
          }
          
          .frequency {
            background: #3b82f6;
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
          }
          
          .lastmod {
            background: #f59e0b;
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
          }
          
          .footer {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          .footer p {
            margin: 0;
            color: #64748b;
          }
          
          @media (max-width: 768px) {
            .url-item {
              flex-direction: column;
              align-items: flex-start;
              gap: 10px;
            }
            
            .url-meta {
              flex-wrap: wrap;
              gap: 10px;
            }
            
            .stats {
              grid-template-columns: 1fr;
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🗺️ XML Sitemap</h1>
          <p>Complete overview of all pages and services available on iTA Groupe website</p>
        </div>
        
        <div class="stats">
          <div class="stat-card">
            <div class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
            <div class="stat-label">Total Pages</div>
          </div>
          <div class="stat-card">
            <div class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:priority = '1'])"/></div>
            <div class="stat-label">High Priority</div>
          </div>
          <div class="stat-card">
            <div class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:changefreq = 'weekly'])"/></div>
            <div class="stat-label">Weekly Updates</div>
          </div>
          <div class="stat-card">
            <div class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url[contains(sitemap:loc, '/services')])"/></div>
            <div class="stat-label">Service Pages</div>
          </div>
        </div>
        
        <div class="sitemap-container">
          <div class="sitemap-header">
            <h2>📄 Sitemap Contents</h2>
          </div>
          <ul class="url-list">
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <li class="url-item">
                <div class="url-info">
                  <a href="{sitemap:loc}" class="url-link">
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                  <div class="url-meta">
                    <span class="meta-item">
                      <span class="priority">Priority: <xsl:value-of select="sitemap:priority"/></span>
                    </span>
                    <span class="meta-item">
                      <span class="frequency">Frequency: <xsl:value-of select="sitemap:changefreq"/></span>
                    </span>
                    <span class="meta-item">
                      <span class="lastmod">Last Modified: <xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/></span>
                    </span>
                  </div>
                </div>
              </li>
            </xsl:for-each>
          </ul>
        </div>
        
        <div class="footer">
          <p>This XML Sitemap is automatically generated by Next.js and updated regularly.</p>
          <p>Generated on: <xsl:value-of select="current-dateTime()"/></p>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
