const fs = require('fs');
const writeFile = fs.writeFile;

const setEnv = () => {
  const targetPath = './src/environments/environment.ts';

  const envConfigFile = `export const environment = {
  baseUrl: '${process.env['BASE_URL']}',
  apiKey: '${process.env['API_KEY']}',
};
`;

  writeFile(targetPath, envConfigFile, (err) => {
    if (err) {
      console.error(err);
      throw err;
    }
  });
};

setEnv();
