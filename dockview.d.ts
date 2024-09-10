// Define the module that people can import in their dockview.config.js
declare module "dockview" {
  // Not doing this anymore
  // Configuration for Docker container
  type DKContainerConfig = {
    // dockerfile?: string; // Path to the Dockerfile
    image: string; // Docker image to use
  };

  // Command configuration for environments that require it (like Node)
  interface DKNodeEnvConfig {
    command: string; // The command to run (e.g., 'npm start')
  }

  // Directory configuration for static environments
  interface DKStaticEnvConfig extends DKStaticConfig {}

  interface DKServeConfig extends DKNodeEnvConfig {
    ports: number[];
  }

  interface DKBuildConfig extends DKNodeEnvConfig {}

  // Supported environments: Node or Static
  type DKEnvironment = "node" | "static" | "custom";

  // Common configuration shared between environments
  type DKBaseConfig = {
    environment: DKEnvironment;
    container?: DKContainerConfig;
  };

  // Static configuration for static environments
  type DKStaticConfig = {
    environment: "static";
    buildDirectory: string;
  } & DKBaseConfig;

  type DKCustomEnvConfig = {
    environment: "custom";
    container: {
      dockerfile: string;
    };
  };

  // Node configuration for node environments
  type DKNodeConfig = {
    environment: "node";
    buildDirectory: string;
    build: DKBuildConfig; // Optional build command (e.g., 'npm run build')
    serve: DKServeConfig; // Serve command (e.g., 'npm start')
  } & DKBaseConfig;

  // Union type for both node and static environments
  export type DockviewConfig =
    | DKNodeConfig
    | DKStaticConfig
    | DKCustomEnvConfig;
}
