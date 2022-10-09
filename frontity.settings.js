const settings = {
  "name": "frontity-react",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Jordi Garreta",
      "description": "Creative coder"
    }, 
  },
  "packages": [
    {
      "name": "jordigarreta-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          // "url": "http://localhost:8888/",
          // "api": "http://localhost:8888/wp-json",
          "url": "https://dashboard.jordigarreta.com",
          "api": "https://dashboard.jordigarreta.com/wp-json/",
          "postTypes": [
            {
              type: "experiment",
              endpoint: "experiment",
              archive: "/experiment"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
