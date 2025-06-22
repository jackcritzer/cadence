import FeatureCard from "../common/FeatureCard"
import ProjectFolderIcon from '@/../public/ProjectFolderIcon.svg'
import VersionHistoryIcon from '@/../public/VersionHistoryIcon.svg'
import ContributionIcon from '@/../public/ContributionIcon.svg'
import FeedbackIcon from '@/../public/FeedbackIcon.svg'

export default function FeatureHighlights() {
    
    const featureData = [
        {
            title: 'Version History',
            image: VersionHistoryIcon,
            imageAlt: 'Waveform with clock icon',
            description: 'Upload any stem or full mix—Cadence auto-increments v1, v2, v3. Browse or roll back in one click.'
        },
        {
            title: 'In-App Feedback',
            image: FeedbackIcon,
            imageAlt: 'Comment on waveform icon',
            description: 'Drop feedback exactly where it matters. Pin comments to that kick hit at 0:32.'
        },
        {
            title: 'One Project Workspace',
            image: ProjectFolderIcon,
            imageAlt: 'Project folder icon',
            description: 'All stems, mixes, and conversation in one secure link—no more hunting through folders.'
        },
        {
            title: 'Credits & Roles',
            image: ContributionIcon,
            imageAlt: 'Piechart icon',
            description: 'Assign producers, vocalists, and engineers—and export clean credits for every release.'
        },
        
    ]

    return (
        <section id="features" className="flex flex-col items-center justify-center w-full h-auto bg-[linear-gradient(to_bottom,_#FFFFFF_80%,_#F3F3F3_100%)] px-12 py-10 scroll-mt-[var(--header-height)]">
            <h2 className="text-h2-size font-dmsans font-bold tracking-[-0.03em] text-text_primary mb-10">
                How It Works
            </h2>
            <div className="flex flex-col lg:flex-row gap-y-5 w-full gap-x-7 mb-8 max-w-[1200px] mx-auto">
                {
                    featureData.map((data, i) => <FeatureCard key={i} data={data}/>)
                }
            </div>
        </section>
    )
}