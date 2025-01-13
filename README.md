# Pot-APP Qwen OCR 插件



## 使用方法

### 添加插件到 Pot

1.[下载插件](https://github.com/sun-i/pot-app-recognize-plugin-qwen-ocr/releases)；

2.打开 Pot-服务设置-文字识别-添加外部插件-安装外部插件，选择下载得到的 `plugin.com.pot-app.qwen-ocr.potext` 文件；

![image-20250113230159492](https://5a352de.webp.li/2025/01/ab995281f9d7f9cdac04a55e0dd48d68.png)

### 获取 token

打开 [Qwen](https://chat.qwenlm.ai/) 注册并登陆账户

`F12` 打开控制台-网络，查看 `completions` 请求头里面的 `Authorization` 字段就是需要的 token

![65742b16f453abbaddbacae72dc231c584d4680f_2_690x281](https://5a352de.webp.li/2025/01/69700b2d8007772e78fdbfdaf2178311.webp)

### 配置插件

1.点击 QwenOCR

![image-20250113230602351](https://5a352de.webp.li/2025/01/b58c75b149d9cdd35e64426bad251a9d.png)

2.输入刚才获得的 token

![image-20250113230721848](https://5a352de.webp.li/2025/01/fa669e72d972ac2fc8ceb4b0ee2be177.png)

3. 在 Pot-热键设置 里面可以设置文字识别的快捷键

![image-20250113230811218](https://5a352de.webp.li/2025/01/297511e346842b7cc15a35f6f0bf2161.png)

4.使用设置的快捷键截图，享受 Qwen 强大的 OCR 能力

![image-20250113231330652](https://5a352de.webp.li/2025/01/1d80cd8843fff9889de4de90b6729568.png)