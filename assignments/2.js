

function sayhi() {
    return 'Hello';
}

function myname(user, func)
{

    const message = func();

    console.log(`${message} ${user}`);
    console.log(user+message);
}

myname("harsha", sayhi);