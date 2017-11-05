import ideasContainer from 'app/ideas/ideasContainer';
import ideas from 'app/ideas/ideas';
import ideaContainer from 'app/idea/ideaContainer';
import idea from 'app/idea/idea';

const blueprint = {
  ideas: ideasContainer(ideas),
  idea: ideaContainer(idea),
}

export default blueprint;
