{ pkgs }: {
  deps = [
    pkgs.nodejs-18_x
  ];

  # Optional: Add environment variables
  env = {
    NODE_ENV = "production";
  };
}