import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <>
        <h1>Contact</h1>
        <p>Kalau ada perlu dengan saya silahkan hubungi saya lewat kontak dibawah, boleh melalui email, sosial media ataupun telegram. 
          Sebelum kirim pesan silahkan menulis salam dan tulis apa keperluannya, boleh bertanya seputar IT, sharing cerita dan pengalaman atau sekedar mengucapkan terimakasih.
          Saya tidak membalas pesan yang tidak didahulukan dengan salam, atau sekedar menulis test, p atau hanya mengirim titik. 
        </p>
        <ul>
        <li>
            <strong>Facebook</strong>:{' '}
            <a target="_blank" href="https://www.facebook.com/kennan.rajendra">
              Akhmad Ghofarudin Kurniawan
            </a>
          </li>
          <li>
            <strong>Email</strong>: <a href="mailto:cs@justapp.id">cs@justapp.id</a>
          </li>
          <li>
            <strong>Telegram</strong>:{' '}
            <a target="_blank" href="https://t.me/Keenanlabs">
              Keenan Labs
            </a>
          </li>
          <li>
            <strong>Twitter</strong>:{' '}
            <a target="_blank" href="https://twitter.com/Keenanlabs">
            Keenanlabs
            </a>
          </li>
          <li>
            <strong>LinkedIn</strong>:{' '}
            <a target="_blank" href="https://www.linkedin.com/in/kurniawan-akhmad/">
              Akhmad Ghofarudin Kurniawan
            </a>
          </li>
        </ul>
      </>
    )
  }
}