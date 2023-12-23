export default function Benefits() {
    const benefits = [
        {
            title: "One Low Price",
            subtitle: "Save big. Get everything with a super low monthly subscription"
        },
        {
            title: "No Limit Price",
            subtitle: "Save big. Get everything with a super low monthly subscription"
        },
        {
            title: "Cancel Anytime",
            subtitle: "Save big. Get everything with a super low monthly subscription"
        },
    ]

    return (
        <div className="bg-black">
            <div className="column-padding">
                <div className="content-grid xl">
                    {benefits.map((benefit) => (
                        <div className="spacing-base" key={benefit.title}>
                            <h3>
                                {benefit.title}
                                <br />
                            </h3>
                            <div>
                                {benefit.subtitle}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
