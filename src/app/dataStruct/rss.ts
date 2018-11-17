import {Channel} from './channel';

export class Rss {

  channel: Channel = new Channel();



  processData (xml: string) {

    this.channel.title = xml.substring(xml.indexOf('<title>') + 7, xml.indexOf('</title>'));
    console.log(this.channel.title);


    for (let i = 0; i < 24; i++) {

      const item: string = xml.substring(xml.indexOf('<item>') + 6, xml.indexOf('</item>'));

      console.log('LOGGG' + i + '\n' + item + '\n');



      // this.channel.items[i].title = item

      xml = xml.substring(xml.indexOf('</item>') + 7, xml.length);

    }



  }

}
