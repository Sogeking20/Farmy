export const UsersService = {
  checkUsers(field, value) {
    let isOk = true;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users?.length) {
      users.forEach(user => {
        console.log(user[field], value);
        if (user[field] === value) {
          isOk = false;
        }
      });
    }

    return isOk;
  },

  createUser(userData) {
    const prevUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (this.checkUsers('email', userData.email)) {
      localStorage.setItem('users', JSON.stringify([...prevUsers, userData]));
      this.loginUser(userData);
      return true;
    }

    return false;
  },

  loginUser(userData) {
    localStorage.setItem('currentUser', JSON.stringify(userData));
    window.location.reload();
  },

  checkPass(email, password) {
    let isOk = false;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users?.length) {
      users.forEach(user => {
        if (user.email === email && user.password === password) {
          this.loginUser(user);
          isOk = true;
        }
      });
    }

    return isOk;
  },

  logout() {
    localStorage.removeItem('currentUser');
    window.location.reload();
  },

  addToCart(name, description, img, price) {
    console.log(name, description, img, price);
    const prevUser = JSON.parse(localStorage.getItem('currentUser')) || {};

    if (prevUser) {
      if (prevUser?.cart) {
        if (!prevUser.cart.includes(name)) {
          localStorage.setItem(
            'currentUser',
            JSON.stringify({ ...prevUser, cart: [...prevUser?.cart] })
          );

          this.updateUser(prevUser.email, {
            ...prevUser,
            cart: [...prevUser?.cart],
          });
        }
      } else {
        localStorage.setItem(
          'currentUser',
          JSON.stringify({ ...prevUser, cart: [name, description, img, price] })
        );

        this.updateUser(prevUser.email, { ...prevUser, cart: [name] });
      }
    }
  },

  deleteFromCart(name, price, description) {
    const prevUser = JSON.parse(localStorage.getItem('currentUser')) || {};

    if (prevUser?.cart?.length) {
      const newCart = prevUser.cart.filter(itemName => itemName !== name);

      localStorage.setItem(
        'currentUser',
        JSON.stringify({ ...prevUser, cart: newCart })
      );

      this.updateUser(prevUser.email, { ...prevUser, cart: newCart });

      window.location.reload();
    }
  },

  updateUser(email, newData) {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const newUsers = users.map(user => {
      if (user.email === email) {
        return newData;
      }
    });

    localStorage.setItem('users', JSON.stringify(newUsers));
  },
};
