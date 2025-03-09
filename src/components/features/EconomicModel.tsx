
import RevenueSources from './RevenueSources';
import BalancePrinciples from './BalancePrinciples';

const EconomicModel = () => {
  return (
    <div className="glass-morphism rounded-xl p-8 transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RevenueSources />
        <BalancePrinciples />
      </div>
    </div>
  );
};

export default EconomicModel;
