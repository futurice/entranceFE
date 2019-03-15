server {
  listen {{ .Env.PORT | default "80" }} default_server;
  listen [::]:{{ .Env.PORT | default "80" }} default_server;

  root /usr/share/nginx/html;
  index index.html;
  error_page   500 502 503 504  /50x.html;

  location ~* \.(?:ico|css|js|gif|jpe?g|png)$ {
    expires 1y;
    add_header Cache-Control "public";
    access_log off;
  }

  location / {
    try_files $uri $uri/ /index.html;
    add_header Cache-Control "no-store, no-cache, must-revalidate";
  }
}
