
type TProps = {
    title: string;
    paragraph: string;
}

const PageHeading = ({ title, paragraph }: TProps) => {
    return (
        <div>
            <h2 className='text-main font-bold text-heading'>{title}</h2>
            <p className='text-paragraph text-title'>{paragraph}</p>
        </div>
    )
}

export default PageHeading
