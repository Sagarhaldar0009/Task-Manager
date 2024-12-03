'use client'; // Now the component is rendering on Client Side.
const Info = () => {
    console.log("By Default it is Server Side Component in NextJs.")
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold text-center">Info Page</h1>
            <p className="text-lg text-gray-600 text-center">
                This is the Info page of our Next.js app.
            </p>
        </div>
    );
};

export default Info;