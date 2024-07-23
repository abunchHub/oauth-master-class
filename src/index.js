window.onload = () => {
  document.getElementById("button").onclick = () => {
    window.YaAuthSuggest.init(
      {
        client_id: "03efac3baf7e4526bac1af5b90c6a4b5",
        response_type: "token",
        redirect_uri: "https://oauth-master-class-ruby.vercel.app/token.html",
      },
      "https://oauth-master-class-ruby.vercel.app/",
      {
        view: "button",
        parentId: "buttonContainer",
        buttonSize: "m",
        buttonView: "main",
        buttonTheme: "light",
        buttonBorderRadius: "0",
        buttonIcon: "ya",
      }
    )
      .then(({ handler }) => handler())
      .then((data) => console.log("Сообщение с токеном", data))
      .catch((error) => console.log("Обработка ошибки", error));
  };
};
