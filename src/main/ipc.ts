import {ipcMain} from 'electron';
import {SettingService} from './service/setting.service';

const services = {
  setting: SettingService,
};

ipcMain.on('bmcl:call', async (e, serviceName, method, args) => {
  console.log(e, serviceName);
  const service = services[serviceName];
  if (!service) {
    return e.reply('bmcl:reply', {err: 'no such service', serviceName});
  }
  const fn = service[method];
  if (!fn) {
    return e.reply('bmcl:reply', {err: 'no such method', method});
  }
  try {
    const res = await fn.apply(fn, args);
    return e.reply('bmcl:reply', {data: res});
  } catch (err) {
    return e.reply('bmcl:reply', {err});
  }
});
