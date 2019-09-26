import * as findJavaHome from 'find-java-home';

export class JavaService {
  public static async getDefaultJava() {
    return new Promise<string>(((resolve, reject) => {
      findJavaHome({allowJre: true}, (err, home) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(home);
        }
      });
    }));
  }
}
