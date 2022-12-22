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

  // Post Request
  post(url, data, callback) {
    this.xhr.open("POST", url);
    this.xhr.setRequestHeader("Content-Type", "application/json"); // Json verisi gönderirken bu geçerli (setRequestHeader json diye arat)
    this.xhr.onload = () => {
      if (this.xhr.status === 201) {
        // Başarılı durum
        callback(null, this.xhr.responseText);
      } else {
        callback("Post Requestinde : Hata oluştu", null);
      }
    };
    this.xhr.send(JSON.stringify(data)); // post - put requestinde gönderirken string değer yapmalısın get - delete requestinde gerek yok
  }

  //Put Request
  put(url, data, callback) {
    this.xhr.open("PUT", url);
    this.xhr.setRequestHeader("Content-Type", "application/json"); // Json verisi gönderirken bu geçerli (setRequestHeader json diye arat)
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        // Başarılı durum
        callback(null, this.xhr.responseText);
      } else {
        callback("Put Requestinde : Hata oluştu", null);
      }
    };
    this.xhr.send(JSON.stringify(data)); // post - put requestinde gönderirken string değer yapmalısın get requestinde gerek yok
  }

  // Delete Request
  delete(url, callback) {
    this.xhr.open("DELETE", url); // Bağlantı açık
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(this.xhr.responseText); // İsteğimiz bitti
      } else {
        // Hata durumu
        callback("Delete Requestinde : Hata oluştu", null);
      }
    };
    this.xhr.send();
  }
}
const request = new Request();

// Get Request

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
// const albums = request.get(
//   "https://jsonplaceholder.typicode.com/albums/10",
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

// Post Request
// request.post(
//   "https://jsonplaceholder.typicode.com/albums",
//   { userId: 06, title: "Behzat Ç." },
//   function (err, album) {
//     if (err === null) {
//       // Başarılı
//       console.log(album);
//     } else {
//       // Hata
//       console.log(err);
//     }
//   }
// );

// Put Request
request.put(
  "https://jsonplaceholder.typicode.com/albums/34",
  { userId: 34, title: "Leyla ile Mecnun" },
  function (err, album) {
    if (err === null) {
      // Başarılı
      console.log(album);
    } else {
      // Hata
      console.log(err);
    }
  }
);

// Delete Request
request.delete(
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
