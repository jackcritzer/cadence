export default function GhostButton({ 
                                        text = "", 
                                        className = ""
                                    }) {
                                        
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className={`
                        ${className}
                        text-sage
                        border-sage border-[1px] 
                        bg-transparent 
                        cursor-pointer 
                        px-6 py-2 
                        rounded
                        hover:bg-[#b8b8b82d]
                        transition-colors duration-300 ease-in-out`
                    }
            onClick={scrollToTop}
        >
            {text}
        </button>
    )
}