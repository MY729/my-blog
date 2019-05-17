import fetch from './axios.config'

const API_HOST = '/api'

// 基本配置
const DEFAULT_CONFIG ={
  isApiHost: true
}

const POST_HEADER = {
  headers: {
    'content-type': 'application/json'
  }
}

/**
 * get 提交
 * @param {String} url 请求的url
 * @param {any} params  请求的参数
 * @param {Obejct} config  请求配置
 * @returns Promise
 */
export function get(url, params = {}, config = {}) {
  let opts = {...DEFAULT_CONFIG, ...config}
  opts.params = {...params}
  return fetch.get(getUrl(url, opts.isApiHost), opts)
}

/**
 *
 * post 提交
 * @param {String} url 请求的url
 * @param {any} [params={}] 请求的参数
 * @param {any} isApiHost 请求配置
 * @returns Promise
 *
 * @memberOf HttpBase
 */
export function post(url, params = {}, config = {}) {
  let opts = {...DEFAULT_CONFIG, ...POST_HEADER, ...config}
  return fetch.post(getUrl(url, opts.isApiHost), params, opts)
}

/**
 *
 * delete 提交
 * @param {String} url 请求的url
 * @param {any} [params={}] 请求的参数
 * @returns Promise
 *
 * @memberOf HttpBase
 */
export function Delete(url, params = {}, config = {}) {
  let opts = {...DEFAULT_CONFIG, ...POST_HEADER, ...config}
  return fetch.delete(getUrl(url, opts.isApiHost), params, opts)
}

/**
 *
 * 上传
 * @export
 * @param {any} url 请求的url
 * @param {any} [params={}] 请求的参数
 * @param {any} [config={}] 配置
 * @returns Promise
 */
export function upload(url, params = {}, config = {}) {
  let opts = {...DEFAULT_CONFIG, ...POST_HEADER, ...config}
  let form = new FormData()
  Object.keys(params).forEach(key => {
    form.append(key, params[key])
  })
  return fetch.post(getUrl(url, opts.isApiHost), form, opts)
}

/**
 *
 * 下载
 * @export
 * @param {any} url 请求
 * @param {any} [params={}] 请求参数
 * @param {string} [type='post'] 请求类型
 * @param {any} [config={}] 配置
 */
export function download(url, params = {}, type = 'post', config = {}) {
  let opts = {...DEFAULT_CONFIG, ...POST_HEADER, ...config}
  let $form = document.createElement('form')
  $form.setAttribute('method', type)
  $form.setAttribute('hidden', 'hidden')
  $form.setAttribute('action', getUrl(url, opts.isApiHost))

  let createInput = (name, value) => {
    let input = document.createElement('input')
    input.setAttribute('type', 'hidden')
    input.setAttribute('name', name)
    input.setAttribute('value', value)

    $form.appendChild(input)
  }

  Object.keys(params).forEach(key => {
    createInput(key, params[key])
  })

  let $body = document.body || document.getElementsByTagName('body')[0]
  $body.append($form)
  $form.submit()
  $form.remove()
}

/**
 *
 * url 处理如果 isApiHost 为true 则添加 API_HOST
 * @param {any} url
 * @param {any} isApiHost
 * @returns
 *
 */
function getUrl(url, isApiHost) {
  if (!isApiHost) {
    return url
  }
  let arr = [API_HOST]
  arr.push(url)
  return arr.join('')
}