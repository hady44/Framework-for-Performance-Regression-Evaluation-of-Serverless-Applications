FROM public.ecr.aws/lambda/nodejs:12

COPY monitor-application-handler.ts ${FUNCTION_DIR}

RUN yum install https://dl.k6.io/rpm/repo.rpm -y

RUN yum install --nogpgcheck k6 -y

CMD [ "app.loadTest" ]