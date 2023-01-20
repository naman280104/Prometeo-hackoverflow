export default function LoginPage(){
    return (
        <main className="w-screen h-screen flex flex-row font-Poppins">
            <section className="w-6/12 bg-violet-500 flex items-center justify-center">
                <img src="https://o.remove.bg/downloads/4ada7673-1e8f-467c-b460-c203eb94e7a6/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95-removebg-preview.png" alt="login image" />
            </section>
            <section className="w-6/12 bg-white flex flex-col justify-center items-center">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAolBMVEX///8AAAAAhsqH1vYAg8nz+v2A1PYAgMhZpdfT7/uzs7NwcHDKysru7u5ra2ukpKQUFBS61+ypqanc7PZRoNUVFRW5ubn29vYvLy/k5OTc3Nz5+fnn5+eIiIix5Pnf39+Dg4PCwsKTk5NDQ0NiYmJYWFjR0dE4ODhNTU0kJCQsLCxGRkZ6tN16enocHBybm5uXxeXH6/ub3Pe45vkAdsRrrdpiQQoqAAAEeUlEQVR4nO3a/UPaOBzH8eZw7CxPDs9WKpUHkQedcrfb/f//2uWbpG2osAoWZdv79QstLWnzaZImbkEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgVfPqBj763d/L18w98/ei7ex9/nf2x09mfH31374MMyECQwc+QQT8dHPkKJ5/BVCkVH/cSJ5/Bnc6gfdxLnHwGfZ3BzXEvcfIZBO3+kbvCT5DB8R2YwWiUbXWSzWE7TkaVTXeQ3GQnDzePdMpflK+bdKoK3185g7OKDNpKTYIn3UdtzdfPelO18huPFrJ/NzE7+tjafd9VaiafSnWDnpwy03WZL2Wrl5cdp7KvnjaqGepv3Ob8Xg6v1kE9Gk2nvDb8+3NlBouVchmMVKZvj46z/VT2rosMWlL5QDJQ9+6UYd9tdLMq5qVNvAvqDC7yMpyklgyaDat5WTrwpToDS2cwVIVQDk6K/fnODDIXpQDn3jHvZZhnMPOOj4IaNLIMzg/KoD8c6B4t7T7Vg/ZcNqQ76Ee80NlE7uHuyOC+E3SWWXByrm3rkslal9qWZlYMKVkG0moudDZDaQ6rWjP455AMbIedFJ1ZT2Ra+uPBPUHdr593ZrDKa9x3dTRtW+oY2ZN1CNP8glkGEoFNZpo1uzfKMmjclg68JgN3A7pxPrhvR/Zh6vYw9s7dnkEvr4itkitQ//beu0ZeiMug7fUQXe5y3wpvkWfQLB14TQZuzmJ6Qse4WZkRQCp2lbazhrw9A/uw9WO/socuTCyxpONKi/OmFuQZTPOh0TaZNyfgZ1AaEF6Tga3jjdokg/nCbj5Ge2cwLJU2L2XQKt4fQeJnVEMGjW+HZhCX7trUredG+7t9MxhUZNC1I44xqjuD0tvx9RlIfZat3My9r0Z98xJzQ2SWwVNVBh15YXillfvC2OUqJqqW5XTDc2gG+mXwtL30se2wj8UJj1UZyMfWCaDLIPSefbcYjN/Ci6C58WrYI4O1mxVo8yiKbD81X9zYBzXO7ztRlRmMi4fbNqU5LgNpJ7MgLyx9cwKb7aD5r3dgjwykpheJu0+pYuz6gFkRBHbmd91xd12VgQyK1ybBtaujXR5l8wOZGplWNVeqluFgI4ONlrBHBqbqapmm18o9Q1kKLNJ0mdXYzAZbqV0hVGRgqq5m6VimiVe2sMjLwL6GxmlpnVVXBo3mt3zptE8G9rYt0x68wd08qLhYE1RnUCy4TI+SwX/hZeAXXkdPKGcg/eHTARkE7Qd7U0s3LiRu/87tx26h8zTM184uA9dd7FduMIyu7NkzaVOxGwCKtXPsFo7P/rKyxgz0Wvr2XGL48r3458bv/738YSeMNubqSS9N+95fUebrNO15a9tBL52GulFMQjPT1b+2J4/CbNyLojDxfj0NXX7tx65kMQiLAbITTtN1PnN4qxcZmBj0jOn20lPX1U7Ttgxevih/bWRABoIMyECQARmI5i6/UQaX5zv8Lv8fDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwgf4HC7lMi+eI0OQAAAAASUVORK5CYII=" alt="" />
                <ul className="flex flex-col w-8/12">
                    <h1 className="font-bold text-3xl font-Poppins">Log In</h1>
                    <div className="my-2 ">
                        <h6>Email</h6>
                        <input type="password" placeholder="Email" className="py-2 px-2 w-8/12" />
                    </div>
                    <div className="my-2">
                        <h6>Password</h6>
                        <input type="password" placeholder="Password" className="py-2 px-2 w-8/12" />
                    </div>

                    <button className="w-ful py-2 mt-3 text-1xl bg-violet-500 text-white font-semibold">Log In</button>
                    <h6>Don't have an account, Sign up here</h6>
                </ul>
            </section>
        </main>
    )
}