async function recognize(base64, lang, options) {
    const { config, utils } = options;
    const { tauriFetch: fetch, cacheDir, readBinaryFile, http } = utils;
    let { token } = config;
  
    let file_path = `${cacheDir}pot_screenshot_cut.png`;
    let fileContent = await readBinaryFile(file_path);
  
    const uploadResponse = await fetch('https://chat.qwenlm.ai/api/v1/files/', {
      method: 'POST',
      headers: {
        'content-type': 'multipart/form-data',
        'authorization': 'Bearer ' + token,
      },
      body: http.Body.form(
        {
          file: {
            file: fileContent,
            mime: 'image/png',
            fileName: 'pot_screenshot_cut.png',
          }
        }
      )
    });
  
    const uploadData = uploadResponse.data;
  
    if (!uploadData.id) throw new Error('文件上传失败');
    let imageId = uploadData.id;
  
    const res = await fetch('https://chat.qwenlm.ai/api/chat/completions', {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'authorization': `Bearer ` + token,
        'Content-Type': 'application/json',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0'
      },
      body: {
        type: 'Json',
        payload: {
          stream: false,
          model: 'qwen-vl-max-latest',
          messages: [
            {
              role: 'user',
              content: [
                { type: 'text', text: '请严格只返回图片中的内容，不要添加任何解释、描述或多余的文字' },
                { type: 'image', image: imageId } // 使用上传后的图片 ID
              ],
            },
          ],
          session_id: '1',
          chat_id: '2',
          id: '3',
        }
      }
    });
  
    if (res.ok) {
      const data = res.data;
      return data.choices[0].message.content;
    } else {
      throw `Http Request Error\nHttp Status: ${res.status}\n${JSON.stringify(res.data)}`;
    }
  
  }
  