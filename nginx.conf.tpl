server {
  listen {{ .Env.PORT | default "80" }} default_server;
  listen [::]:{{ .Env.PORT | default "80" }} default_server;

  root /usr/share/nginx/html;
  index index.html;
  error_page   500 502 503 504  /50x.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
