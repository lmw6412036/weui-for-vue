function ajaxUploader(file, options) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    let form = new FormData();
    form.append("file", file);
    if (options.formData && Object.keys(options.formData).length > 0) {
      for (let ii in options.formData) {
        form.append(ii, options.formData[ii]);
      }
    }
    xhr.open("POST", options.server);
    if (options.headers && Object.keys(options.headers).length > 0) {
      for (let i in options.headers) {
        xhr.setRequestHeader(i, options.headers[i]);
      }
    }
    xhr.onload = (res) => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        try {
          var response = "";
          if (typeof xhr.response == "string") {
            response = (JSON.parse(xhr.response));
          } else {
            response = xhr.response
          }
          resolve(response);
        } catch (e) {
          reject(e);
        }

      } else {
        reject(xhr);
      }

    }
    xhr.upload.onprogress = function (res) {
      options.progress(res, options.fileObj);
    };
    xhr.send(form);
  });
}

let ii = 0;
let fileArr = [];//全局文件名数组


export default function (files, options) {
  /*基本参数解构*/
  let {server, fileVal, formData, progress, clearQueue} = options;
  let opt = {server, fileVal, formData, progress};
  /*队列函数处理*/
  let {queued, success, complete, error} = options;
  /*本次上传返回结果队列*/
  let resArr = [];
  /*本次上传文件队列*/
  let queueArr = [];
  for (let k = 0; k < files.length; k++) {
    queueArr.push(Object.assign({}, {file: files[k]}, {
      state: 2,
      index: k,
      fileId: "id" + Math.floor(Math.random() * 100000)
    }));
  }
  console.log("本次队列", queueArr);

  /*递归处理预览*/
  scan(files, 0);
  function scan(files, j) {
    if (j == files.length) {
      //预览完毕，开始上传
      upload(files, opt, 0);
      return
    }
    if (fileArr.indexOf(files[j].name) >= 0) {
      error(files[j].name + "文件已存在");
      j++;
      scan(files, j);
      return
    }
    let fr = new FileReader();
    fr.onload = (res) => {
      queueArr[j].state = 3;
      queueArr[j].url = fr.result;
      queueArr[j].progress = "等待上传";
      queued(queueArr[j]);
      fileArr.push(files[j].name);
      j++;
      scan(files, j)
    };
    fr.readAsDataURL(files[j]);
  }


  /*递归处理上传*/
  function upload(files, opt, i) {
    if (i == files.length) {
      //上传完毕
      return
    }

    opt.fileObj = Object.assign({}, queueArr[i]);
    ajaxUploader(files[i], opt).then((res) => {
      resArr.push(res);
      if (clearQueue && i == files.length - 1) {
        fileArr = [];
      }
      if (i == files.length - 1) {
        complete(resArr);
      }
      queueArr[i].state = 4;
      success(res, queueArr[i]);
      i++;
      upload(files, opt, i);
    }, (err) => {
      error(err);
    })
  }


}
