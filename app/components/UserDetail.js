

export default function UserDetail({user}) {
    console.log(user)
    return (
        <details className="border my-2 p-3 rounded " style={{ minWidth: '100%', fontSize: "1.25em" }}>
            <summary className="fw-bold">
                {user.displayHeading}
            </summary>
            <div className="p-2">
                <h3 style={{ fontSize: '1em' }}>{user.displaySubHeading}</h3>
                { user.links.map((link, index) => {
                    return (
                        <div key={index}>
                            <a href={link.url} target="_blank" rel="noreferrer" className="text-decoration-none">
                                {link.title}
                            </a>
                        </div>
                    );
                })}
            </div>
        </details>
    );
}
