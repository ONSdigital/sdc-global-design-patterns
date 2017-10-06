`fly -t main login -c CONCOURSE_URL`

Add SDC Global Design Patterns Pipeline

`fly -t main set-pipeline -p sdc-global-design-patterns -c concourse.yml  --load-vars-from secrets.yml`

`fly -t main unpause-pipeline --pipeline sdc-global-design-patterns`
