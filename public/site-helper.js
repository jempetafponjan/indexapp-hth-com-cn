(function() {
  'use strict';

  var CONFIG = {
    siteUrl: 'https://indexapp-hth.com.cn',
    keyword: '华体会',
    cardTitle: '平台访问提示',
    badgeLabel: '关键词',
    noticeText: '请通过官方渠道访问，确保网络环境安全。'
  };

  var seed = 'c116f6c8196efb2b';

  function createCardElement() {
    var card = document.createElement('div');
    card.className = 'site-helper-card';
    card.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;background:#fff;border:1px solid #ddd;border-radius:8px;padding:16px;max-width:280px;box-shadow:0 4px 12px rgba(0,0,0,0.15);font-family:sans-serif;font-size:14px;line-height:1.5;';
    
    var title = document.createElement('h4');
    title.textContent = CONFIG.cardTitle;
    title.style.cssText = 'margin:0 0 10px;color:#333;font-weight:600;';
    card.appendChild(title);

    var link = document.createElement('a');
    link.href = CONFIG.siteUrl;
    link.textContent = CONFIG.siteUrl;
    link.target = '_blank';
    link.style.cssText = 'display:block;word-break:break-all;color:#1a73e8;text-decoration:none;margin-bottom:10px;';
    card.appendChild(link);

    var badge = document.createElement('span');
    badge.textContent = CONFIG.badgeLabel + ': ' + CONFIG.keyword;
    badge.style.cssText = 'display:inline-block;background:#e8f0fe;color:#1967d2;padding:2px 10px;border-radius:12px;font-size:12px;font-weight:500;margin-bottom:10px;';
    card.appendChild(badge);

    var notice = document.createElement('p');
    notice.textContent = CONFIG.noticeText;
    notice.style.cssText = 'margin:0;color:#555;font-size:13px;';
    card.appendChild(notice);

    return card;
  }

  function generateBadges(count) {
    var badges = [];
    var base = ['华体会', '体育', '电竞', '真人', '彩票'];
    for (var i = 0; i < count; i++) {
      var idx = (i + seed.charCodeAt(i % seed.length)) % base.length;
      badges.push(base[idx]);
    }
    return badges;
  }

  function renderBadgeList(container, badges) {
    var list = document.createElement('div');
    list.style.cssText = 'margin-top:12px;display:flex;flex-wrap:wrap;gap:4px;';
    badges.forEach(function(tag) {
      var span = document.createElement('span');
      span.textContent = tag;
      span.style.cssText = 'background:#f1f3f4;color:#3c4043;padding:2px 8px;border-radius:10px;font-size:11px;';
      list.appendChild(span);
    });
    container.appendChild(list);
  }

  function addAccessInstructions(card) {
    var p = document.createElement('p');
    p.textContent = '访问说明：请使用最新浏览器，推荐Chrome或Edge。如遇加载问题，请刷新页面或稍后重试。';
    p.style.cssText = 'margin:8px 0 0;color:#777;font-size:12px;border-top:1px solid #eee;padding-top:8px;';
    card.appendChild(p);
  }

  function init() {
    var card = createCardElement();
    var badges = generateBadges(5);
    renderBadgeList(card, badges);
    addAccessInstructions(card);
    document.body.appendChild(card);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();