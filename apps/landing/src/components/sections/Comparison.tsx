export default function PlatformComparison() {
    //const checkmarkSpan = (<span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 rounded-full text-sm">✔</span>)
    //const exSpan = (<span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 rounded-full text-sm">✔</span>)

    const rows = [
        {
            feature: "Organize by stems, beats, vocals",
            dropbox: `❌ Generic folders`,
            cadence: "✔ Music-first file types",
        },
        {
            feature: "Version tracking",
            dropbox: "❌ Manual file names",
            cadence: "✔ Built-in version labels",
        },
        {
            feature: "Feedback",
            dropbox: "❌ Not supported",
            cadence: "✔ Timestamped comments",
        },
        {
            feature: "Credits tracking",
            dropbox: "❌ Manual or missing",
            cadence: "✔ Structured and exportable",
        },
    ];

    return (
        <section className="flex flex-col items-center justify-center w-full h-auto bg-[#F8F8F8] px-8 py-16 bg-[linear-gradient(to_bottom,_#F3F3F3_80%,_#EDEDED_100%)]">
            <h2 className="text-h2-size text-center font-dmsans font-bold tracking-[-0.03em] text-text_primary mb-4 px-8">
                How Cadence Stacks Up
            </h2>
            <p className="text-xl font-regular font-dmsans tracking-[-0.03em] text-text_primary px-8">A side-by-side look at what makes Cadence different from generic file sharing tools.</p>
            <div className="w-full lg:max-w-4xl rounded-xl shadow-md p-1 mt-10 mb-10 max-w-[1200px] mx-auto">
                <div className="grid grid-cols-3 divide-x divide-gray-300 font-semibold text-text_primary">
                    <div className="p-4" />
                    <div className="flex items-center p-4 text-[#5E6A64] font-dmsans font-medium tracking-[-0.03em] text-xl">
                        <p>cadence</p>
                    </div>
                    <div className="flex items-center p-4">Dropbox / Drive</div>
                </div>

                {rows.map((row, i) => (
                    <div
                        key={row.feature}
                        className={`grid grid-cols-3 divide-x divide-gray-200 text-sm ${
                            i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        }`}
                        >
                            <div className="p-4 font-medium text-text_primary">{row.feature}</div>
                            <div className="p-4 flex justify-start items-center font-semibold text-text_primary">{row.cadence}</div>
                            <div className="p-4 flex justify-start items-center text-text_primary">{row.dropbox}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}