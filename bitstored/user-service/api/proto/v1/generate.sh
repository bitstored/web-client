protoc -I=. service.proto \
-I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
  --js_out=import_style=commonjs:./../../../ \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./../../../
