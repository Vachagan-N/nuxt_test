export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    if(config.data){
      config.data = JSON.stringify(config.data)
    }

    if (config.url.endsWith('api/auth/login')) {
      config.url = 'auth/login';
    }

    if (config.url.endsWith('api/auth/logout')) {
      config.url = 'auth/logout';
    }

    if (config.url.endsWith('api/auth/refresh')) {
      config.url = 'auth/refresh';
    }

    if (config.url.endsWith('api/auth/user')) {
      config.url = 'auth/init';
    }

    config.headers = {
      ...config.headers, 
      'Content-Type': 'application/json',
    }
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 404) {
      redirect('/404')
    }
    if(code === 417 ){
      redirect('/417')
    }
    if(code === 401){
      redirect('401')
    }
  })
}