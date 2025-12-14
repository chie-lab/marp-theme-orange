---
marp: true
theme: orange
paginate: true
title: デバッグ用スライド
description: orange テーマのデバッグ用スライドです
image: https://chie-lab.github.io/marp-theme-orange/debug.png
---

<!-- _class: cover -->
<!-- _paginate: false -->

# デバッグ用スライド

サブタイトル等はここに入力します

---

<!-- _class: section -->
<!-- _paginate: false -->

# section

section は中扉として利用することを想定しています

---

# 文字サイズ

# 見出しレベル1

## 見出しレベル2

### 見出しレベル3

#### 見出しレベル4

##### 見出しレベル5

###### 見出しレベル6

通常の段落テキスト

---

# リスト

- リスト項目1
- リスト項目2
  - ネストされたリスト項目

1. 番号付きリスト項目1
2. 番号付きリスト項目2
   1. ネストされた番号付きリスト項目1
   2. ネストされた番号付きリスト項目2

---

# 強調と斜体

**強調テキスト**

_斜体テキスト_

---

# コードとコードブロック

インラインコード: `const example = "code"`

```typescript
// コードブロックのテスト
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const result = greet("orange");
console.log(result);
```

---

# 引用ブロック

> 引用ブロック
>
> > ネストされた引用

---

# テーブル

| ヘッダー1 | ヘッダー2 | ヘッダー3 |
| --------- | --------- | --------- |
| データ1   | データ2   | データ3   |
| データ4   | データ5   | データ6   |
| データ7   | データ8   | データ9   |

---

# リンク

[marp-theme-orange](https://github.com/chie-lab/marp-theme-orange)

---

<!-- _class: content-image -->

# content-image

![w:300px](https://placehold.jp/150x150.png)

- 画像が中央に表示される
- テキストを組み合わせるレイアウト

---

<!-- _class: content-image-right -->

# content-image-right

![w:500px](https://placehold.jp/150x150.png)

- 右側に画像を配置するレイアウト
- デフォルトでは右側50%の幅
- 左側にテキストコンテンツ
- テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト

---

<!-- _class: content-image-right content-30 -->

# content-image-right content-30

![w:500px](https://placehold.jp/150x150.png)

- テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト

---

<!-- _class: content-image-right content-40 -->

# content-image-right content-40

![w:500px](https://placehold.jp/150x150.png)

- テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト

---

<!-- _class: content-image-right content-60 -->

# content-image-right content-60

![w:400px](https://placehold.jp/150x150.png)

- テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト

---

<!-- _class: content-image-right content-70 -->

# content-image-right content-70

![w:300px](https://placehold.jp/150x150.png)

- テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト

---

<!-- _class: content-image-right content-80 -->

# content-image-right content-80

![w:200px](https://placehold.jp/150x150.png)

- テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト

---

<!-- _class: content-image-left -->

# content-image-left

![w:500px](https://placehold.jp/150x150.png)

- テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト

---

<!-- _class: content-image-left content-30 -->

# content-image-left content-30

![w:500px](https://placehold.jp/150x150.png)

- テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト

---

<!-- _class: content-image-left content-40 -->

# content-image-left content-40

![w:500px](https://placehold.jp/150x150.png)

- テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト

---

<!-- _class: content-image-left content-60 -->

# content-image-left content-60

![w:400px](https://placehold.jp/150x150.png)

- テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト

---

<!-- _class: content-image-left content-70 -->

# content-image-left content-70

![w:300px](https://placehold.jp/1500x1500.png)

- テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト

---

<!-- _class: content-image-left content-70 -->

# content-image-left content-70

![w:300px](https://placehold.jp/150x150.png)

- テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト

---

<!-- _class: content-image-left content-80 -->

# content-image-left content-80

![w:200px](https://placehold.jp/150x150.png)

- テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト

---

<!-- _class: column-layout -->

# column-layout

<div class="column">

## カラム1

- アイテム1
- アイテム2
- アイテム3

</div>

<div class="column">

## カラム2

1. 手順1
2. 手順2
3. 手順3

</div>

---

<!-- _class: column-layout -->

# column-layout (3カラム)

<div class="column">

## カラム1

- アイテム1
- アイテム2
- アイテム3

</div>

<div class="column">

## カラム2

1. 手順1
2. 手順2
3. 手順3

</div>

<div class="column">

## カラム３

1. テスト1
2. テスト2
3. テスト3

</div>

---

<!-- _class: all-text-center -->

# all-text-center

## すべてのテキストが中央揃え

### 見出しレベル3も中央

通常のテキストも中央揃えになります。

- リスト項目も
- 中央揃えです

---

<!-- _class: h1-text-center h2-text-center h3-text-center h4-text-center h5-text-center h6-text-center text-center -->

# text-center

# 見出しレベル1のテキスト

## 見出しレベル2のテキスト

### 見出しレベル3のテキスト

#### 見出しレベル4のテキスト

##### 見出しレベル5のテキスト

###### 見出しレベル6のテキスト

通常のテキスト

---

<!-- _class: align-center -->

# align-center

## 縦方向の中央揃え

---

<!-- _class: no-header -->

# no-header

このスライドではヘッダーが非表示になります。

フルスクリーンでコンテンツを表示したい場合に使用します。
