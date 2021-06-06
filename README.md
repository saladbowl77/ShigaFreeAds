# ShigaFreeAds
滋賀県の頑張る企業応援コロナに負けるな広告のJavaScriptを公開しているページです。

## demo
[こちら](https://saladbowl77.github.io/ShigaFreeAds/sample.html)からお願いします

## 使い方
サイズは二種類あり

- 320×250 (Large)
- 320×100 (Bar)

になっています。

広告を読み込みたいところに

```html
<div class="shigaFreeAd_L"></div> <!-- 320 * 250 -->
<div class="shigaFreeAd_B"></div> <!-- 320 * 100 -->
```

のどちらかをサイズに合わせてご使用ください。  
なおページに複数個広告をつけることもできますが、仕組み上同一広告が配信される場合がございます。ご了承ください。

そしてページ下部<body>の閉じタグ前にJavaScriptの読み込みをお願いします。

```html
<script src="https://saladbowl77.github.io/ShigaFreeAds/ShigaFreeAds.js"></script>
```

ご不明な点ありましたら[さらだぼぉる](https://twitter.com/saladbowl_dev)までDMをお願いします。  
またissueやプルリクもお待ちしております。