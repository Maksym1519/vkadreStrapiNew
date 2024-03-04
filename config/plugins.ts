// export default () => ({});
module.exports = ({ env }) => ({
    'strapi-neon-tech-db-branches': {
      enabled: true,
      config: {
        neonApiKey: "qvzhaz3eudw3049sqyxaea1roity4x2w5a6u8kcfi00re4t3y6nauq8eog5rd9z6",
        neonProjectName: "vkadre",
        neonRole: "flying1519",
        //(gitBranch: "main")
      }
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  });
  
