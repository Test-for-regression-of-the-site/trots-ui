async () => {
    // Разбивка
    const { arr: groups } = (
        Array.from(new Uint8Array(1000)).map((_,i) => i)/* YOUR ARRAY */
    ).reduce(({ i, arr }, x) => {
        if (!arr[i]) {
            arr[i] = [];
        }
        arr[i].push(x);
        if (arr[i].length === 10) {
            i++
        }
        return {i, arr};
    },
    { i: 0, arr: [] }
    );
    // Выполнение по группам
    for (let i=0; i < groups.length; i++) {
        await Promise.all(groups[i].map(async (x) => {
            console.log(x) /* YOUR TEST */
        }));
    }
}