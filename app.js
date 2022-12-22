// Ajax , Callback , Http Request

class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }

  // Get Request
  get(url, callback) {
    this.xhr.open("GET", url); // Bağlantı açık

    // This karışma yüzüne hata alıyoruz

    // Yöntem 1
    // const temp = this;
    // this.xhr.onload = function () {
    //   if (temp.xhr.status === 200) {
    //     console.log(temp.xhr.responseText);
    //   }
    // };

    // Yöntem 2
    // this.xhr.onload = function () {
    //   if (this.status === 200) {
    //     console.log(this.responseText);
    //   }
    // };

    // Yöntem 3
    // this.xhr.onload = function () {
    //   if (this.xhr.status === 200) {
    //     console.log(this.xhr.responseText);
    //   }
    // }.bind(this);

    // Yöntem 4 (eror function)
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(this.xhr.responseText); // İsteğimiz bitti
      } else {
        // Hata durumu
        callback("Get Requestinde : Hata oluştu", null);
      }
    };
    this.xhr.send();
  }
}
const request = new Request();

// Hepsini çağırdık
// const albums = request.get(
//   "https://jsonplaceholder.typicode.com/albums",
//   function (err, response) {
//     if (err === null) {
//       // Başarılı
//       console.log(response);
//     } else {
//       // Hata
//       console.log(err);
//     }
//   }
// );

// İçinden id ile seçtiğimizi aldık
const albums = request.get(
  "https://jsonplaceholder.typicode.com/albums/10",
  function (err, response) {
    if (err === null) {
      // Başarılı
      console.log(response);
    } else {
      // Hata
      console.log(err);
    }
  }
);

console.log(albums);
