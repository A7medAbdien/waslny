import LoginSection from "@/components/secitons/LoginSection";


export default function LoginPage() {
    return (
        <main className="flex flex-col items-center px-4">
            <div
                className={`w-screen min-h-[60vh] rounded-[6rem] md:rounded-[9rem] leading-6 flex flex-row justify-center items-center`}
            >
                <LoginSection negativeMargin />
            </div>
        </main>
    );
}
