const Navlist = (props) => {

    const { data, handleRedirect } = props;

    return (
        <div className='navbar-list'>
            {data.map((item) => (
                <a onClick={() => handleRedirect(item)}>{item}</a>
            ))}
        </div>
    )
}

export default Navlist;

// cara 1 langsung props
// const Navlist = (props) => {
// <a href="#">{props.data[0]}</a>

// cara 2 destructure didalam param
// const Navlist = ({ data }) => {
// <a href="#">{data[0]}</a>