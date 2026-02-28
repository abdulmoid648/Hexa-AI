export default function VoiceBars() {
    const bars = Array.from({ length: 15 });

    return (
        <div className="absolute inset-0 flex items-center justify-center gap-2 z-0 overflow-hidden">
            {bars.map((_, i) => (
                <div
                    key={i}
                    className="voice-bar w-12 h-32 bg-cyan-100 rounded-full"
                    style={{
                        animationDelay: `${i * 0.25}s`,
                        opacity: 0.8,
                    }}
                />
            ))}
        </div>
    );
}
