import FeatureCard from "../common/FeatureCard"
import ProjectFolderIcon from '@/../public/ProjectFolderIcon.svg'
import VersionHistoryIcon from '@/../public/VersionHistoryIcon.svg'
import ContributionIcon from '@/../public/ContributionIcon.svg'
import FeedbackIcon from '@/../public/FeedbackIcon.svg'

export default function FeatureHighlights() {
    
    const featureData = [
        {
            title: 'Centralized Projects',
            image: ProjectFolderIcon,
            imageAlt: 'Project folder icon',
            description: 'Store stems, samples, and notes in one secure folder—no more digging through email or Dropbox.'
        },
        {
            title: 'Version History',
            image: VersionHistoryIcon,
            imageAlt: 'Waveform with clock icon',
            description: 'Track and compare different versions of your beats and mixes—all in one place.'
        },
        {
            title: 'Contribution Tracking',
            image: ContributionIcon,
            imageAlt: 'Piechart icon',
            description: 'Let Cadence track who did what and when. Export a clear credits sheet whenever you need it.'
        },
        {
            title: 'In-App Feedback',
            image: FeedbackIcon,
            imageAlt: 'Comment on waveform icon',
            description: 'Use file-specific chats and a project-wide thread so feedback stays organized.'
        },
    ]

    return (
        <section id="features" className="flex flex-col items-center justify-center w-full h-auto bg-[linear-gradient(to_bottom,_#FFFFFF_80%,_#F3F3F3_100%)] px-12 py-10">
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