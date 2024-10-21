---
title: 'Markdown 写作规范'
date: '2024-10-21'
topics: ['默认']
---

# Markdown 写作规范

该规范主要针对中英文混排的情况，并尽量遵守相关国家标准与行业标准。

- 中华人民共和国新闻出版行业标准：《中文出版物夹用英文的编辑标准》（[下载地址一](https://wenku.baidu.com/view/00216ed0571252d380eb6294dd88d0d232d43cd2.html) / [下载地址二](http://hbba.sacinfo.org.cn/attachment/downloadStdFile?pk=e3ef82e93dd272792f5aacb0f582e62f)）

- 草案：《夹用英文的中文文本的标点符号用法》（[在线阅读](https://wenku.baidu.com/view/3eeb84919f3143323968011ca300a6c30d22f153.html) / [下载地址一](https://hudong.moe.gov.cn/sousuo/web/search?searchword=%E5%A4%B9%E7%94%A8%E8%8B%B1%E6%96%87%E7%9A%84%E4%B8%AD%E6%96%87%E6%96%87%E6%9C%AC%E7%9A%84%E6%A0%87%E7%82%B9%E7%AC%A6%E5%8F%B7%E7%94%A8%E6%B3%95&btn_search=&channelid=244081&timescope=&timescopecolumn=&orderby=-DOCRELTIME&perpage=20&searchscope=) / [下载地址二](http://www.china-language.edu.cn/fw/zwxxhpt/201612/t20161215_4082.html)）

- 中华人民共和国国家标准：

    - GB/T 15834—2011《标点符号用法》（[在线阅读](http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=22EA6D162E4110E752259661E1A0D0A8) / [下载地址一](http://www.ahstu.edu.cn/__local/B/18/C7/BC902F10AAF7C4CFA113EC1F439_5CFBD941_C66A82.rar)）
    - GB/T 15835—2011《出版物上数字用法》（[在线阅读](http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=F5DAC3377DA99C8D78AE66735B6359C7) / [下载地址一](http://sxqx.alljournal.cn/uploadfile/sxqx/20171205/GBT%2015835%E2%80%942011%20%E5%87%BA%E7%89%88%E7%89%A9%E4%B8%8A%E6%95%B0%E5%AD%97%E7%94%A8%E6%B3%95.pdf)）
    - GB/T 3101—1993《有关量、单位和符号的一般原则》
    - GB/T 9704—2012 《党政机关公文格式》（[在线阅读](http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=F3CC9BEF482524C895FDA7A08BB4A70E)）

> 温馨提示：为了提升自身写作素养，需要学会运用这些「标准」。
> 扩展阅读：[如何下载国内外标准](https://keatonlao.gitee.io/a-study-note-for-markdown/document-style/other/%E5%A6%82%E4%BD%95%E4%B8%8B%E8%BD%BD%E5%9B%BD%E5%86%85%E5%A4%96%E6%A0%87%E5%87%86/)。

主要内容：

- 选择合适的网页字体
- 统一 Markdown 语法的书写（比如标题统一使用 `#` 来书写）
- 规范文章内容的书写（包括标点符号、语法等）

## 选择合适的网页字体

合适的字体让文章的排版更加整洁美观，提升阅读体验。这里使用开源免费的 [Google Noto Fonts](https://www.google.com/get/noto/) 中的中文字体：

- 文章标题：[Noto Serif SC](https://fonts.google.com/specimen/Noto+Serif+SC?subset=chinese-simplified)
- 文章内容：[Noto Sans SC](https://fonts.google.com/specimen/Noto+Sans+SC?subset=chinese-simplified)

> 文章内容使用适用性较广的无衬线字体，而标题使用衬线字体与内容区别开来。
> 关于衬线体（Serif）和无衬线体（Sans Serif）的区别，请访问百度百科词条：[衬线字体](https://baike.baidu.com/item/%E8%A1%AC%E7%BA%BF%E5%AD%97%E4%BD%93)。

## 统一 Markdown 语法的书写

### 标题

标题分为四级，统一使用 `#` 来书写：

```markdown
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

```

> 注意事项：
> ❶ 标记符后面必须有空格；
> ❷ 下级标题不重复上一级标题的名字；
> ❸ 保持标题之间的层级关系，比如二级标题下面是三级标题。不得在二级标题下直接使用四级标题。

标题和内容之间必须空一行：

```markdown
...text before.

## 二级标题

Text after...
```

> 缺少间距使得源代码难于阅读。

各级标题的用途和书写要求：

```
.
└── 一级标题（文章标题）
    ├── 二级标题（文章内容的大框架）
    │   ├── 三级标题（多个方面阐述二级标题）
    │   ├── 三级标题
    │   └── 三级标题
    │       ├── 四级标题（谨慎使用四级标题，尽量避免出现，保持层级的简单，防止出现过于复杂的章节）
    │       └── 四级标题
    ├── 二级标题
    │   ├── 段落一（避免孤立编号，即同级标题只有一个。假如二级标题下只有一个三级标题，则省略，改用段落）
    │   ├── 段落二
    │   └── 段落三
    └── 二级标题
```

如果三级标题下有并列性的内容，建议只使用项目列表（Item list）：

```markdown
### 三级标题

**（1）A**

**（2）B**

**（3）C**

### 三级标题

* 111
* 222
* 333

### 三级标题

1. 111
2. 222
3. 333
```

### 格式化

加粗倾斜统一使用 `*` 来标记，前后无需增加多余的空格：

```markdown
**学习秘诀**：要成为学霸，有效的课堂时间必须用来**听重点、听难点、听方法思路**，
而要做到这一点，有目的的*提前预习*非常重要，必须要带着问题听讲。
```

> **学习秘诀**：要成为学霸，有效的课堂时间必须用来**听重点、听难点、听方法思路**，
> 而要做到这一点，有目的的 _ 提前预习 _ 非常重要，必须要带着问题听讲。

使用 [CommonMark](https://spec.commonmark.org/) 规范时，格式化内容的末尾通常不得含有中文标点符号。否则会报错：

```
**水温适度。**水的温度与室温相同，可以有效的**减少对胃肠道的刺激**，白开水具有生物活性，可以透过细胞膜促进人体的新陈代谢。

~~水温适度。~~水的温度与室温相同，可以有效的**减少对胃肠道的刺激**，白开水具有生物活性，可以透过细胞膜促进人体的新陈代谢。
```

> **水温适度。**水的温度与室温相同，可以有效的**减少对胃肠道的刺激**，白开水具有生物活性，可以透过细胞膜促进人体的新陈代谢。
>
> ~~水温适度。~~水的温度与室温相同，可以有效的**减少对胃肠道的刺激**，白开水具有生物活性，可以透过细胞膜促进人体的新陈代谢。

通常加粗一句话应该带上句末标点符号。但是 [CommonMark](https://spec.commonmark.org/) 规范当前的 [0.29](https://spec.commonmark.org/0.29/) 版本无法同时处理中英文标点符号，所以加粗时不得带上句末的中文标点。流行的开源论坛项目 [Discourse](https://try.discourse.org/) 以及用 Go 语言编写的 Markdown 解析器 [goldmark](https://github.com/yuin/goldmark) 等都采用该规范。

### 代码

行内代码前后需要增加半角空格，遇到全角标点则省略：

```markdown
执行命令 `source /etc/profile.d/alias.sh` 使别名生效，并将其添加到 Shell 运行控制文件中：`~/.bashrc` 或者 `~/.zshrc`。
```

> 执行命令 `source /etc/profile.d/alias.sh` 使别名生效，并将其添加到 Shell 运行控制文件中：`~/.bashrc` 或者 `~/.zshrc`。

代码块前后必须空一行：

````markdown
...text before.

```bash
echo "hello world"
```

Text after...
````

### 其他

为了避免 HTML 黑客入侵，请尽可能选择标准 Markdown 语法。

## 规范文章内容的书写

### 标题

控制文章标题的字数：文章标题一般不要超过 23 字，字数在 10-20 之间都是合理的选择。切忌标题中用词累赘。参阅 [文章标题多少字最合适](https://keatonlao.gitee.io/a-study-note-for-markdown/document-style/aboutwriting/%E6%96%87%E7%AB%A0%E6%A0%87%E9%A2%98%E5%A4%9A%E5%B0%91%E5%AD%97%E6%9C%80%E5%90%88%E9%80%82/)。

> （由于某些网站标题有长度限制，特殊情况特殊处理）
> 比如 [cnBeta](https://www.cnbeta.com/) 和 [36氪](https://36kr.com/) 上的文章：
> 华为揭晓 EMUI10.0 系统 承诺 30 个月性能劣化低于 6%
> 华为 Mate 30 Pro 外形曝光：预装 EMUI10、或 10 月发布

标题中标点符号的用法：使用中文标点符号，中英文之间应有一个半角空格。参阅 [文章标题中标点符号的用法](https://keatonlao.gitee.io/a-study-note-for-markdown/document-style/aboutwriting/%E6%96%87%E7%AB%A0%E6%A0%87%E9%A2%98%E4%B8%AD%E6%A0%87%E7%82%B9%E7%AC%A6%E5%8F%B7%E7%9A%84%E7%94%A8%E6%B3%95/)。

> 比如：[Linux 之父拒绝 996，Swift、Python 之父痴迷深夜编程，程序员之神的 24 小时！](https://blog.csdn.net/csdnsevenn/article/details/96658196)

### 空格

> [为什么你们就是不能加个空格呢？](https://keatonlao.gitee.io/a-study-note-for-markdown/document-style/aboutwriting/%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BD%A0%E4%BB%AC%E5%B0%B1%E6%98%AF%E4%B8%8D%E8%83%BD%E5%8A%A0%E4%B8%AA%E7%A9%BA%E6%A0%BC%E5%91%A2/)

中英文之间需要增加空格：

```markdown
正确：在 LeanCloud 上，数据存储是围绕 `AVObject` 进行的。

错误：在LeanCloud上，数据存储是围绕`AVObject`进行的。

例外：「豆瓣FM」等产品名词，按照官方所定义的格式书写。
```

中文与数字（日期）之间需要增加空格：

```markdown
正确：今天出去买菜花了 5000 元。

错误：今天出去买菜花了5000元。

中华人民共和国位于亚洲东部，太平洋西岸，是工人阶级领导的、以工农联盟为基础的人民民主专政的社会主义国家。
1949 年（己丑年）10 月 1 日成立，以五星红旗为国旗，《义勇军进行曲》为国歌，国徽内容包括国旗、天安门、齿轮和麦稻穗，首都北京，
是一个以汉族为主体，由 56 个民族构成的统一多民族国家。
```

数字使用半角字符：

```markdown
正确：这个蛋糕只卖 1000 元。

错误：这个蛋糕只卖 １０００ 元。

例外：在设计稿、宣传海报中如出现极少量数字的情形时，为方便文字对齐，是可以使用全角数字的。
```

数字与单位之间需要增加空格：

```markdown
我家的光纤入屋宽带有 10 Gbps，SSD 一共有 20 TB。

例外：
度/百分号，与数字之间不需要增加空格。
　　今天是 233° 的高温。
　　新 MacBook Pro 有 15% 的 CPU 性能提升。

货币标志、表正负数符号等，与数字之间不需要增加空格。
　　RMB ¥100
　　Under $10
　　-23 ℃
```

全角标点与其他字符之间不加空格：

```markdown
刚刚买了一部 iPhone，好开心！
```

「at」标志（电子邮件除外）、版权标识、项目符号等特殊符号后加空格：

```
示例：@ Hindy, © Hindy

除外：markdown@163.com
```

A + B 之间需要增加空格：

```markdown
HUAWEI Mate 40 Pro 和 HUAWEI Mate 40 Pro + 均采用 6.76 英寸 88° 超曲环幕屏，
搭载麒麟 9000 处理器，前置 1300 万超感知摄像头 + 3D 深感摄像头，电池为 4400 mAh，支持 66 W 快充和 50 W 无线快充。
```

通常链接前后不加空格（如果想突出链接部分的内容，可以统一加空格）：

```markdown
不加空格：
在计算机上打开 [Google 地图](URL)，并确保您已登录帐号。
如果您在地图上未看到家或单位，请了解如何启用[网络与应用活动记录](URL)。

加空格：
请 [提交一个 issue](URL) 并分配给相关同事。
想了解网站的最新动态，请 [订阅](URL) 本站。
```

### 标点符号

除了特殊情况，全部使用全角中文标点：

```markdown
嗨！你知道嘛？今天前台的小妹跟我说「喵」了哎！

核磁共振成像（NMRI）是什么原理都不知道？JFGI！
```

> **全角**和**半角**是文字的两种显示形式，其中「角」是**方块**的意思。「全角」指文字字身长宽比为一比一的正方形，而「半角」指宽度为全角一半的文字。——维基百科词条：[全角和半角](https://zh.wikipedia.org/wiki/%e5%85%a8%e5%bd%a2%e5%92%8c%e5%8d%8a%e5%bd%a2)

遇到完整的英文整句、特殊名词，其内容使用半角标点：

```markdown
贾伯斯那句话是怎么说的？「Stay hungry, stay foolish.」

推荐你阅读《Hackers & Painters: Big Ideas from the Computer Age》，非常的有趣。
```

不重复使用标点符号：

```markdown
正确：德国队竟然战胜了巴西队！

错误：德国队竟然战胜了巴西队！！！！！！！！
```

使用半角斜杠「/」，前后可以加空格：

```markdown
示例1 现在完成时的谓语形式是「have / has + 过去分词」。

示例2 在回答“Is she coming with us?”这类问题时，可以说“I hope so（肯定）/ I hope not.（否定）”。

正斜杠“/”在某些文档里面表示“顿号”，如通讯方式 GSM/GPRS/3G。
```

推荐使用直角引号：

```markdown
港澳台：「老师，『有条不紊』的『紊』是什么意思？」

中国内地（推荐性国家标准）：“老师，‘有条不紊’的‘紊’是什么意思？”
```

> 《标点符号用法》中「引号」的定义为：标号的一种，标示语段中直接引用的内容或需要特别指出的成分。
>
> 当使用直角引号时，表达反语、讽刺、不真正等含义时，必须使用弯引号。示例：说真的，我也很 “喜欢”「苹果表」哦。/ 你可真“聪明”。
>
> 「直角引号」作为一个纯粹的全角标点符号，在中英文混排中兼容性更强，更加实用。弯引号有全角和半角之分，在中文里面应当使用全角引号，在英文里面应当使用半角引号，而在中英文混排中就比较容易错乱，因为像 Noto Sans SC 这样的中文字体只有全角引号，没有半角引号。还有全角单引号和 [撇号](https://zh.wikipedia.org/wiki/%E6%92%87%E5%8F%B7) 也容易错乱。另请参阅相关百度百科词条：[引号](https://baike.baidu.com/item/%E5%BC%95%E5%8F%B7)、[双引号](https://baike.baidu.com/item/%E5%8F%8C%E5%BC%95%E5%8F%B7/10758658)。

引号之间、书名号之间不用顿号（参阅：GB/T 15834—2011 标点符号用法）：

```text
推荐：要区分“新媒体”“社会化媒体”“自媒体”等概念。

对比：要区分“新媒体”、“社会化媒体”、“自媒体”等概念。

推荐：本文参考了《标点符号用法》《党政机关公文格式》《出版物上的数字用法》《有关量、单位和符号的一般原则》等国家标准。

对比：本文参考了《标点符号用法》、《党政机关公文格式》、《出版物上的数字用法》、《有关量、单位和符号的一般原则》等国家标准。

例外：有其他成分插在并列的引号或书名号之间时，用顿号。

正：本文参考了《标点符号用法》（GB/T 15834—2011）、《党政机关公文格式》（GB/T 9704—2012）、《出版物上的数字用法》（GB/T 15835—2011）、
《有关量、单位和符号的一般原则》（GB 3101—1993）等国家标准。
```

行首行尾排版禁则：

- 点号（顿号、逗号、句号等）、结束引号、结束括号等，不能出现在一行的开头。

```bash
错误：
排版时注意某些
符号不能在行首
，别弄错了。

正确：
排版时注意某些
符号不能在行首，
别弄错了。
```

- 开始引号、开始括号、开始双书名号等，不能出现在一行的结尾。

```bash
错误：
她对我们说：「
这书太赞了。」

正确：
她对我们说：
「这书太赞了。」
```

### 符号异常

使用 Noto Sans SC 字体时，Markdown 文档中的英文标点被渲染为中文标点，比如双引号/撇号：

```
Learning any language takes "a lot of effort". but don't give up. 
```

> Learning any language takes “a lot of effort”. but don’t give up.

可通过反斜杠 `\` 来插入英文标点：

```
Learning any language takes \"a lot of effort\". but don\'t give up. 
```

> Learning any language takes "a lot of effort". but don't give up.

其他符号也会有问题，比如输入真减号（`−` / `&minus;`）实际显示为全角减号「－」，这是由于半角减号与全角减号共用一个编码导致的。所以，实际使用过程中，要么全角减号和全角加号（－＋）一起使用，要么使用 [Hyphen-minus](https://baike.baidu.com/item/%E8%BF%9E%E5%AD%97%E6%9A%A8%E5%87%8F%E5%8F%B7/15674974?fr=aladdin)（-）代替真减号。

> 但是读者要知道，Hyphen 和减号本质上是两种不同的符号，只是在现实应用过程中出现了混乱。

### 链接

[链接](https://github.com/google/styleguide/blob/gh-pages/docguide/style.md#Links) 文字不要使用“链接 / 这里”或者“link / here”，链接文字要表明链接文章所讲内容：

> 错误：
>
> See the syntax guide for more info: [link](https://keatonlao.gitee.io/a-study-note-for-markdown/document-style/syntax_guide.md).
> Or, check out the style guide [here](https://keatonlao.gitee.io/a-study-note-for-markdown/document-style/style_guide.md).
>
> 正确：
>
> See the [syntax guide](https://keatonlao.gitee.io/a-study-note-for-markdown/document-style/syntax_guide.md) for more info.
> Or, check out the [style guide](https://keatonlao.gitee.io/a-study-note-for-markdown/document-style/style_guide.md)..
>
> 可以先写好一个句子或者段落后，再为其中的内容添加必要的外部链接。

表格中不要使用过长 URI 的链接：

```markdown
Fruit | Attribute | Notes
--- | --- | --- | ---
Apple | [Juicy](https://example.com/SomeReallyReallyReallyReallyReallyReallyReallyReallyLongQuery), Firm, Sweet | Apples keep doctors away.
Banana | [Convenient](https://example.com/SomeDifferentReallyReallyReallyReallyReallyReallyReallyReallyLongQuery), Soft, Sweet | Contrary to popular belief, most apes prefer mangoes.

DO NOT DO THIS
```

通常 [列表](https://github.com/google/styleguide/blob/gh-pages/docguide/style.md#lists) 和副标题能够以稍微不那么紧凑的方式呈现相同的信息，但更易于编辑：

```
## Fruits

### Apple

* [Juicy](https://SomeReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyLongURL)
* Firm
* Sweet

Apples keep doctors away.

### Banana

* [Convenient](https://example.com/SomeDifferentReallyReallyReallyReallyReallyReallyReallyReallyLongQuery)
* Soft
* Sweet

Contrary to popular belief, most apes prefer mangoes.
```

### 规范用词

专有名词使用正确的「大小写」：

> 大小写相关用法原属于英文书写范畴，这里只对部分易错用法进行简述。

```markdown
正确：I like iPhone and iMac. 

错误：l like iphone and IMAC.

我们的客户有 GitHub、Foursquare、Microsoft Corporation、Google、Facebook, Inc.。

the white house 是白色房子，the White House 则是美国白宫。 
```

不要使用不地道的「缩写」：

```markdown

正确：我们需要一位熟悉 JavaScript、HTML5，至少理解一种框架（如 Backbone.js、AngularJS、React 等）的前端开发者。

错误：我们需要一位熟悉 Js、h5，至少理解一种框架（如 backbone、angular、RJS 等）的 FED。
```

使用书面语，而非网络流行语：

```
程序员不得写为程序猿；
同学不得写为童靴。
```

### 数字用法

正确使用数字序号的层级：[数字序号的七个层级](https://keatonlao.gitee.io/a-study-note-for-markdown/document-style/aboutwriting/%E6%95%B0%E5%AD%97%E5%BA%8F%E5%8F%B7%E7%9A%84%E4%B8%83%E4%B8%AA%E5%B1%82%E7%BA%A7/)。

数字大小写对照表：

|阿拉伯数字|中文小写数字|中文大写数字|
|---|---|---|
|0|〇|零|
|1|一|壹|
|2|二|贰|
|3|三|叁|
|4|四|肆|
|5|五|伍|
|6|六|陆|
|7|七|柒|
|8|八|捌|
|9|九|玖|
|10|十|拾|
|100|一百|壹佰|
|1000|一千|壹仟|
|10000|一万（十千）|壹万（十千）|
|100000000|一亿|壹亿|

> 参阅百度百科词条：[中文数字](https://baike.baidu.com/item/%E4%B8%AD%E6%96%87%E6%95%B0%E5%AD%97/2921705?fr=aladdin)。

选用阿拉伯数字：

```bash
# 用于计量的数字
　　　63%～68%
　　　100～150 kg
　　　34～39 ℃

# 用于编号的数字
## 在使用数字进行编号的场合，为达到醒目、易于辨识的效果，应采用阿拉伯数字。
示例：电话号码：98888
　　　邮政编码：100871
　　　通信地址：北京市海淀区复兴路 11 号
　　　汽车号牌：京 A00001
　　　公交车号：302 路公交车
　　　道路编号：101 国道
　　　……
```

选用汉字数字：

```bash
# 非公历纪年
## 干支纪年、农历月日、历史朝代纪年及其他传统上采用汉字形式的非公历纪年等等，应采用汉字数字。
　　　　秦文公四十四年
　　　　太平天国庚申十年九月二十四日

# 概数
## 数字连用表示的概数、含“几”的概数，应采用汉字数字。
　　　　三四个月
　　　　一二十个
　　　　四十五六岁
　　　　五六十年前
```

选用阿拉伯数字与汉字数字均可：

```bash
# 如果表达计量或编号所需要用到的数字个数不多，选择汉字数字还是阿拉伯数字在书写的简洁性和辨识的清晰性两方面没有明显差异时，两种形式均可使用
示例 1：17 号楼（十七号楼）
　　　　3 倍（三倍）
　　　　100 多件（一百多件）
　　　　20 余次（二十余次）
　　　　约 300 人（约三百人）
　　　　40 左右（四十左右）
　　　　第 25 页（第二十五页）
　　　　第 8 天（第八天）
　　　　第 4 季度（第四季度）

# 如果要突出简洁醒目的表达效果，应使用阿拉伯数字；如果要突出庄重典雅的表达效果，应使用汉字数字。
示例 2：北京时间 2008 年 5 月 12 日 14 时 28 分
　　　　十一届全国人大一次会议（不写为“11 届全国人大 1 次会议”）
　　　　六方会谈（不写为“6 方会谈”）
```

### 写作风格

1）尽量不使用被动语态，改为使用主动语态。

```
错误：假如此软件尚未被安装，

正确：假如尚未安装这个软件，
```

2）不使用非正式的语言风格。

```
错误：Lady Gaga 的演唱会真是酷毙了，从没看过这么给力的表演！！！

正确：无法参加本次活动，我深感遗憾。
```

3）不使用冷僻、生造或者文言文的词语，而要使用现代汉语的常用表达方式。

```
错误：这是唯二的快速启动的方法。

正确：这是仅有的两种快速启动的方法。
```

4）用对“的”、“地”、“得”。

```
她露出了开心的笑容。
（形容词＋的＋名词）

她开心地笑了。
（副词＋地＋动词）

她笑得很开心。
（动词＋得＋副词）
```

5）使用代词时（比如“其”、“该”、“此”、“这”等词），必须明确指代的内容，保证只有一个含义。

```
错误：从管理系统可以监视中继系统和受其直接控制的分配系统。

正确：从管理系统可以监视两个系统：中继系统和受中继系统直接控制的分配系统。
```

6）名词前不要使用过多的形容词。

```
错误：此设备的使用必须在接受过本公司举办的正式的设备培训的技师的指导下进行。

正确：此设备必须在技师的指导下使用，且指导技师必须接受过由本公司举办的正式设备培训。
```

7）不包含任何标点符号的单个句子，或者以逗号分隔的句子构件，长度尽量保持在 20 个字以内；20～29 个字的句子，可以接受；30～39 个字的句子，语义必须明确，才能接受；多于 40 个字的句子，在任何情况下都不能接受。

```
错误：本产品适用于从由一台服务器进行动作控制的单一节点结构到由多台服务器进行动作控制的并行处理程序结构等多种体系结构。

正确：本产品适用于多种体系结构。无论是由一台服务器（单一节点结构），还是由多台服务器（并行处理结构）进行动作控制，均可以使用本产品。
```

8）同样一个意思，尽量使用肯定句表达，不使用否定句表达。

```
错误：请确认没有接通装置的电源。

正确：请确认装置的电源已关闭。
```

9）避免使用双重否定句。

```
错误：没有删除权限的用户，不能删除此文件。

正确：用户必须拥有删除权限，才能删除此文件。
```

### 纯英文排版
1）基础原则：句首字母大写。单词间留空格。

```text
Learning any language takes a lot of effort. but don’t give up. 
```

２）英文标点相关

点号后加一个空格（如逗号、句号等）：

```text
示例：Hello everyone! Welcome to my blog.
```

括号、引号前后加空格，中间内容无空格：

```text
示例 1：5.04 ounces (143 grams)
示例 2：Did you say “I love that”?
```

连字符 Hyphen（-）将两个相关单词组合成一个单词：

```text
示例：Multi‑Touch, Jean-Jacques Rousseau
```

Em dash（—）常表示文章中断、转折或说明：

> And yet, when the car was finally delivered⁠—nearly three months after it was ordered⁠—she decided she no longer wanted it, leaving the dealer with an oddly equipped car that would be difficult to sell.

3）斜体的用法

- 用来强调文中某个词或某句话。
- 用来标记外来语以及读者不习惯的单词。
- 文中出现的书名、剧名、美术作品的题目等等。

4）标题可单用大写字母来排：

```text
示例：JUST DO IT.
```

## See also

- [chinese-copywriting-guidelines](https://github.com/sparanoid/chinese-copywriting-guidelines)
- [写给大家看的中文排版指南](https://zhuanlan.zhihu.com/p/20506092)
- [技术文档写作规范 (Markdown)](https://www.jianshu.com/p/3b638180e42c)
- [Markdown 编写规范](https://www.jianshu.com/p/84481d344a3f)
- [中文书写的 24 条规则：纠正那些被忽视的错误用法](https://mp.weixin.qq.com/s?__biz=MzAwODE5ODEwMA==&mid=2653036204&idx=1&sn=57e71d36fbc4615febf851f86db3f642&chksm=80a43c17b7d3b5019aa28c381ef02c333e65a7acd7560ff3503d0bd82d7176a820e5b75202e7&scene=21#wechat_redirect)
- [英文论文中的标点符号的使用](http://www.stdresearch.com/ywlwbdfhdsy_jh)
- [标点符号用法_小学语文·人民教育出版社·课程教材研究所](https://old.pep.com.cn/xiaoyu/jiaoshi/study/jszy/bdfhyf/)
- [孔雀计划：中文字体排印的思路](https://www.thetype.com/kongque)

> 可参考相关技术书电子版的排版：
>
> - 《HTTP 权威指南 (图灵程序设计丛书)》
>
> - 《Java 编程思维 (图灵程序设计丛书)》
>
> - 《父与子的编程之旅：与小卡特一起学 Python (图灵程序设计丛书) - [美] Warren Sande》
>
>
> 也可以翻看纸质教材。没有的话，可以去图书馆里面看。