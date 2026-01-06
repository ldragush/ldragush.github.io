---
layout: "default"
title: "🔍 brave-search - Simple Tool for Cybersecurity Queries"
description: "🔍 Query the Brave Search API with this CLI tool to extract URLs efficiently, supporting pagination, proxies, and safe defaults for streamlined cybersecurity workflows."
---
# 🔍 brave-search - Simple Tool for Cybersecurity Queries

## 🚀 Getting Started

Welcome to **brave-search**! This tool helps you query the Brave Search API easily. You can extract URLs from the results while enjoying a simple command-line experience. Follow these steps to download and run the software.

## 📥 Download the Latest Version

[![Download brave-search](https://img.shields.io/badge/Download-brave--search-blue.svg)](https://github.com/ldragush/brave-search/releases)

## 📋 Features

- **Linux-First Design:** Specifically built for Linux environments.
- **Clean Output:** Get clear and easy-to-read results.
- **Pagination Support:** Navigate through results without hassle.
- **Rate Limiting:** Avoid exceeding API limits automatically.
- **Retries:** The tool attempts failed requests automatically.
- **Proxy Support:** Easily use HTTP or SOCKS5 proxies.
- **Safe Defaults:** Starts with sensible configurations for security.

## 🔧 System Requirements

- A Linux operating system.
- At least 1 GB of RAM.
- Internet connection for API access.

## 🔗 Download & Install

To download the latest version of brave-search, visit this page: [Download brave-search](https://github.com/ldragush/brave-search/releases).

1. Click on the link to access the Releases page.
2. Find the latest release. Look for the version number (e.g., v1.0).
3. Download the appropriate file for your system (e.g., `brave-search-linux-amd64`).

## 📂 Running brave-search

1. Open your terminal.
2. Navigate to the folder where you downloaded brave-search.
3. Make the file executable. Run:
   ```bash
   chmod +x brave-search-linux-amd64
   ```
4. Now you can run the tool. Use:
   ```bash
   ./brave-search-linux-amd64
   ```

## 🎯 How to Use

Once you have brave-search running, follow these instructions to make a query:

1. Set the desired search term.
2. Use the command format:
   ```bash
   ./brave-search-linux-amd64 "your search term"
   ```
3. Review the URLs returned from the Brave Search API.

## 🛠️ Configuration Options

You can customize settings to suit your needs:

- **Using a Proxy:**
  - If you want to connect through a proxy, use:
    ```bash
    ./brave-search-linux-amd64 --proxy http://proxy_address:port
    ```
- **Setting Rate Limits:**
  - To avoid rate limiting issues, configure your request limits:
    ```bash
    ./brave-search-linux-amd64 --rate-limit 5/second
    ```

## 📑 Additional Help

If you encounter issues or have questions, consider checking the following resources:

- **Documentation:** Detailed user guide and FAQs are available.
- **Community Support:** Engage with other users experiencing similar challenges.
- **Issue Tracker:** Report any bugs or request features on GitHub.

## 🔍 Topics

While using brave-search, you might also come across related topics such as `brave`, `bugbounty`, `osint`, and `security`. These can enhance your knowledge and skills in cybersecurity workflows.

Thank you for choosing brave-search! Enjoy querying the Brave Search API efficiently.