chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "lookupIP",
      title: "查询 IP 地址",
      contexts: ["selection"] // 仅在选中文本时显示
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "lookupIP") {
      const selectedText = info.selectionText;
      const url = `https://www.ip138.com/iplookup.php?ip=${encodeURIComponent(selectedText)}&action=2`; // 替换为查询链接
      chrome.windows.create({ url: url, type: "popup" }); // 使用新窗口打开链接
    }
  });