import chaiImg from '../../public/static/images/chai.svg'

const ChaiComponent = () => {
  return (
    <div className="fixed bottom-0 right-0 m-2 cursor-pointer">
      <a href="http://chaicode.com/">
        <img src={chaiImg} />
      </a>
    </div>
  );
};

export default ChaiComponent;
