enum Rol {
  USER,
  GUEST,
  ADMIN,
}

const changeUserRol = (rol: Rol) => {};

changeUserRol(Rol.ADMIN);

// Generics
function settings<const T>(settings: T[]) {
  function setSettings(settings: T, value: string) {}
  return { setSettings };
}

const currentSettings = settings([
  "font-size",
  "font-family",
  "background-color",
]);

currentSettings.setSettings("background-color", "blue");

// Decorators

const auth = true;

function isAuth(
  originalMethod: (...args: any[]) => any,
  _context: ClassMemberDecoratorContext
) {
  return function newMethod() {
    if (auth) {
      console.log(`You need auth`);
    }

    originalMethod();
  };
}

class User {
  @isAuth
  createPost() {}
  @isAuth
  createComment() {}
}
